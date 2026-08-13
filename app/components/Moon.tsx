"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Moon() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current;
    //scene
    const scene = new THREE.Scene();
    //camera
    const camera = new THREE.PerspectiveCamera(
      45,
      el.clientWidth / el.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.SphereGeometry(1, 64, 64);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    //texture
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(
      "/moonTexture.png",
      () => {
        console.log("Moon texture loaded");
        renderer.render(scene, camera);
      },
      undefined,
      (error) => {
        console.log("Moon texture failed to load", error);
      },
    );
    const material = new THREE.MeshStandardMaterial({
      map: moonTexture,
      roughness: 1,
    });
    //moon
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    const sunlight = new THREE.DirectionalLight(0xffffff, 3);
    sunlight.position.set(5, 3, 5);
    scene.add(sunlight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.13);
    scene.add(ambientLight);

    //orbit
    const orbitGrp = new THREE.Group();
    scene.add(orbitGrp);
    const points: THREE.Vector3[] = [];
    const segments = 100;
    const orbitRadiusX = 1.4;
    const orbitRadiusY = 0.8;
    const orbitRadiusZ = 0.8;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = orbitRadiusX * Math.cos(angle);
      const y = orbitRadiusY * Math.sin(angle);
      const z = orbitRadiusZ * Math.sin(angle);

      points.push(new THREE.Vector3(x, y, z));
    }
    const orbitCurve = new THREE.CatmullRomCurve3(points);

    orbitGrp.rotation.x = THREE.MathUtils.degToRad(40);
    orbitGrp.rotation.z = THREE.MathUtils.degToRad(20);

    console.log("REACHED ROCKET LOADER");

    fetch("/Space_rocket.glb")
      .then((response) => {
        console.log("Rocket response:", response.status, response.statusText);
      })
      .catch((error) => {
        console.error("Rocket fetch failed:", error);
      });

    const gltfLoader = new GLTFLoader();
    const clock = new THREE.Timer();
    let t = 0;
    gltfLoader.load(
      "/Space_rocket.glb",
      (gltf) => {
        const rocket = gltf.scene;
        rocket.scale.setScalar(0.02);
        rocket.rotation.x = THREE.MathUtils.degToRad(-90);

        // -- Flame exhaust --
        const box = new THREE.Box3().setFromObject(rocket);
        const rocketHeight = box.max.y - box.min.y;

        const flameGroup = new THREE.Group();

        // Generate procedural fire texture
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext("2d");

        if (context) {
          const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
          gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
          gradient.addColorStop(0.2, "rgba(255, 200, 50, 1)");
          gradient.addColorStop(0.4, "rgba(255, 80, 0, 0.8)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

          context.fillStyle = gradient;
          context.fillRect(0, 0, 128, 128);
        }

        const flameTexture = new THREE.CanvasTexture(canvas);
        const flameMat = new THREE.SpriteMaterial({
          map: flameTexture,
          color: 0xffffff,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const flameSprite = new THREE.Sprite(flameMat);
        // Scale it up (Sprites scale in X and Y)
        flameSprite.scale.set(rocketHeight * 80, rocketHeight * 30, 1);
        flameGroup.add(flameSprite);

        // Position flame at the tail of the rocket
        flameGroup.position.y = box.min.y - rocketHeight * 8;
        rocket.add(flameGroup);

        const rocketContainer = new THREE.Group();
        rocketContainer.add(rocket);

        orbitGrp.add(rocketContainer);

        const startPosition = orbitCurve.getPointAt(0);
        rocketContainer.position.copy(startPosition);

        // Force world matrix update so localToWorld works
        orbitGrp.updateMatrixWorld(true);

        const animate = () => {
          requestAnimationFrame(animate);

          const delta = clock.getDelta();

          t -= delta * 0.1;

          if (t < 0) {
            t = 1;
          }

          const position = orbitCurve.getPointAt(t);
          const tangent = orbitCurve.getTangentAt(t);

          rocketContainer.position.copy(position);

          // Update world matrices before doing space conversions
          orbitGrp.updateMatrixWorld(true);

          // Transform tangent from orbitGrp local space to world space
          const worldTangent = tangent
            .clone()
            .transformDirection(orbitGrp.matrixWorld);

          // Flatten Y in world space so rocket only faces left/right
          worldTangent.y = 0;
          worldTangent.normalize();

          // Get rocket's world position for a proper world-space lookAt target
          const worldPos = new THREE.Vector3();
          rocketContainer.getWorldPosition(worldPos);

          rocketContainer.up.set(0, 1, 0);
          rocketContainer.lookAt(worldPos.clone().add(worldTangent));

          // Flame flicker animation
          const flickerScale = 0.8 + Math.random() * 0.4;
          flameGroup.scale.set(flickerScale, flickerScale, flickerScale);
          flameSprite.material.opacity = 0.7 + Math.random() * 0.3;

          renderer.render(scene, camera);
        };

        animate();

        console.log("Rocket Loaded", rocket);
      },

      undefined,

      (error) => {
        console.error("rocket failed to load", error);
      },
    );
  }, []);

  return <div ref={mountRef} className="h-full w-full"></div>;
}

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

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
  }, []);

  return <div ref={mountRef} className="h-full w-full"></div>;
}

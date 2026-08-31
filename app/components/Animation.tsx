import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Animation({ src, className = "w-20 h-20" }: any) {
  return (
    <div className={className}>
      <DotLottieReact src={src} autoplay loop />
    </div>
  );
}

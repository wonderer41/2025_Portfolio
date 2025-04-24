import anime from "animejs";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current,
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
    });
  }, []);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-foreground text-center"
      >
        Hi, I’m Gerardo 👋
        <br />I build clean and animated UIs.
      </h1>
    </section>
  );
}

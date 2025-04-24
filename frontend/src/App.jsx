import { Button } from "./components/ui/button";
import anime from "animejs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    anime({
      targets: ".animate-me",
      translateX: [0, 100],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 animate-me">
        Hello with Anime.js ✨
      </h1>
      <Button className="animate-me">I’m animated too!</Button>
    </div>
  );
}

export default App;

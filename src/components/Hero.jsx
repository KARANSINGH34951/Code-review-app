import { useEffect } from "react";
import gsap from "gsap";
import {Link} from "react-router-dom"

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".cta-buttons",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.5 }
    );
  }, []);

  return (
    <header className="w-full max-w-4xl mx-auto text-center py-8">

      <h1 className="text-5xl font-bold text-gray-800 hero-text">
        Optimize Your Code Effortlessly
      </h1>

      <p className="mt-4 text-xl text-gray-600 hero-text">
        Our platform provides advanced code review and optimization services to enhance your coding efficiency.
      </p>

      <div className="mt-8 cta-buttons flex justify-center space-x-4">
       <Link to="/signup"> <button className="px-6 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition-colors">
          Lets get Started
        </button>
        </Link>
      </div>
      
    </header>
  );
};

export default Hero;

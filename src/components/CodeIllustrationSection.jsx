import React from "react";
import img from "../utilis/img.jpeg"

const CodeIllustrationSection = () => {
  return (
    <section id="code-illustration" className="mt-16 w-full max-w-4xl mx-auto">
      <div className=" p-8 rounded-lg shadow-lg flex items-center justify-center space-x-8">
        <img
          src={img} // Replace with your image path
          alt="Code Illustration"
          className="w-64 h-64 object-cover rounded-md"
        />
        <div className="text-left max-w-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Unlock the Potential of Your Code</h2>
          <p className="text-lg text-gray-600">
            Our platform empowers developers by providing automated code reviews, performance optimization,
            and actionable feedback. Enhance your coding efficiency and elevate your projects to new heights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeIllustrationSection;
import React from "react";
import { FaCheckCircle, FaCode, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="mt-16 w-full max-w-4xl mx-auto">
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-item flex items-start bg-gray-50 p-4 rounded-md shadow-md">
            <FaCode className="text-blue-500 w-8 h-8" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Automated Code Review</h3>
              <p className="text-gray-600">
                Instantly review your code with our automated system, saving time and ensuring high quality.
              </p>
            </div>
          </div>
          <div className="feature-item flex items-start bg-gray-50 p-4 rounded-md shadow-md">
            <FaShieldAlt className="text-green-500 w-8 h-8" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Security Assurance</h3>
              <p className="text-gray-600">
                Ensure your code is secure with our comprehensive security checks and suggestions.
              </p>
            </div>
          </div>
          <div className="feature-item flex items-start bg-gray-50 p-4 rounded-md shadow-md">
            <FaSyncAlt className="text-purple-500 w-8 h-8" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Continuous Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate our platform into your CI/CD pipeline for continuous code quality.
              </p>
            </div>
          </div>
          <div className="feature-item flex items-start bg-gray-50 p-4 rounded-md shadow-md">
            <FaCheckCircle className="text-red-500 w-8 h-8" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Detailed Feedback</h3>
              <p className="text-gray-600">
                Receive detailed feedback on your code, including suggestions for improvement and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


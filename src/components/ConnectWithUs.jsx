import React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const ConnectWithUs = () => {
  return (
    <section id="connect" className="mt-16 w-full max-w-4xl mx-auto">
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Connect With Us</h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-600 text-lg text-center">
            Stay connected with us through various channels. We'd love to hear from you!
          </p>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <FiTwitter className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/company/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors"
            >
              <FiLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 transition-colors"
            >
              <FiGithub className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-600 text-lg text-center">
            Join our community and participate in discussions on our forums.
          </p>
          <a
            href="https://example.com/community"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Visit Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
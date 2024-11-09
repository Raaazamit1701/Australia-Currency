import React from "react";

const AdsBanner = () => {
  return (
    <div className="relative p-10 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
      <div className="absolute inset-0 opacity-20 blur-2xl rounded-full bg-purple-500"></div>
      <div className="relative z-10">
        <img
          src="https://media.giphy.com/media/l1J9qmdEzcRSHNWkg/giphy.gif" // Sparkle GIF
          alt="Animated Icon"
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />
        <h1 className="text-4xl font-extrabold mb-4 animate-pulse">
          Start Your Journey with <span className="text-yellow-400">Konix</span>{" "}
          for <span className="text-yellow-400">FREE</span>
        </h1>
        <p className="text-lg font-light mb-6">
          Sign up today and enjoy exclusive benefits!
        </p>
        <button className="bg-yellow-400 text-blue-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default AdsBanner;

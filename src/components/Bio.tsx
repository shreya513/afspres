// src/components/Bio.tsx
import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-8 " style={{background: '#bdc8d5'}}> 
    {/* style={{ background: '#ede4f3'}} */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="image.JPG" // Update this path to your image
        //   alt="Shreya"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hello! I'm Shreya, and I’m excited to share my experiences with AFS. I’ve had an incredible journey, full of growth and adventure. This timeline showcases the highlights of my experience.
        </p>
      </div>
    </div>
  );
};

export default Bio;

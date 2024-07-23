import React from 'react';

const Bio: React.FC = () => {
  return (
    <div
      className="flex items-end justify-center min-h-screen bg-center p-10"
      style={{ backgroundImage: 'url(img3.JPG)', backgroundSize: "cover" }}
    >
      <div className="p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto" style={{ backgroundColor: '#faf0e6', opacity: 0.7 }}>
        <p className="text-lg">
          Hello! I'm Shreya, and I’m excited to share my experiences with AFS. I’ve had an incredible journey, full of growth and adventure. This timeline showcases the highlights of my experience.
        </p>
      </div>
    </div>
  );
};

export default Bio;

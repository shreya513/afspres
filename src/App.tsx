import React from 'react';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  return (
    <div className="items-center justify-center h-screen overflow-auto" style={{ background: '#edf2f7' }}>
      <div className="fixed top-0 left-0 z-10 w-full py-4 text-white bg-gray-800">
        <h1 className="text-3xl font-bold text-center">My Timeline</h1>
      </div>
      <div className="container w-full mx-auto bg-gray-200" style={{ marginTop: '4rem', paddingTop: '2rem', position: 'relative' }}>
        <Timeline />
      </div>
    </div>
  );
};

export default App;

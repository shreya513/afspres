import React from 'react';
import Timeline from './components/Timeline';
import Bio from './components/Bio';

const App: React.FC = () => {
  return (
    <div className="items-center justify-center h-screen overflow-auto" style={{ background: '#a87dc2' }}>
      <header className="fixed top-0 left-0 z-10 w-full py-4 text-white" style={{ background: '#a87dc2' }}>
        <h1 className="text-3xl font-bold text-center font-mono">Shreya's Experiences at AFS</h1>
      </header>
      <main style={{marginTop: '4rem' }}>
        <div className="container w-full mx-auto " style={{maxWidth: '1200px', background: '#ffffff'}}>
          <Bio />
          <Timeline />
        </div>
      </main>
      
    </div>
  );
};

export default App;

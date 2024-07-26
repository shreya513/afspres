import React from 'react';
import Timeline from './components/Timeline';
import Bio from './components/Bio';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#faf0e6', minHeight: '100vh' }}>
      <header className="fixed top-0 left-0 z-10 w-full py-3 text-white flex justify-between items-center" style={{ background: '#faf0e6'}}>
        <h1 className="text-2xl font-bold text-center font-mono ml-4 items-center" style={{ color: '#5a2e94' }}>
          Shreya's Experiences at AFS
        </h1>
        <nav className="mr-4">
          <a href="#bio" className="text-lg font-mono px-3 py-1 hover:underline" style={{ color: '#5a2e94' }}>
            About Me
          </a>
          <a href="#timeline" className="text-lg font-mono px-3 py-1 hover:underline" style={{ color: '#5a2e94' }}>
            Experiences
          </a>
        </nav>
      </header>
      <main style={{ marginTop: '3.51rem' }}>
        <div
          id="bio"
          className="pt-14 -mt-14" 
        >
          <Bio />
        </div>
        <div
          id="timeline"
          style={{ background: '#bdacd1', scrollMarginTop: '3.5rem', width: '100%', margin: 0 }}
        >
          <Timeline />
        </div>
      </main>
    </div>
  );
};

export default App;

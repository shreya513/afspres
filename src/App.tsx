import React, { useEffect } from 'react';
import Timeline from './components/Timeline';
import Bio from './components/Bio';

const App: React.FC = () => {
  useEffect(() => {
    window.location.hash = '#home';
  }, []);
  return (
    <div className="app-container">
      <header className="header">
      <a href="#home" className="header-title">Shreya's Experiences at AFS</a>
      <nav className="nav-links">
        <a href="#bio" className="nav-link">About Me</a>
        <a href="#timeline" className="nav-link">Experiences</a>
      </nav>
      </header>
      <main className="main-section">
        <div id="home"></div>
        <div id="bio" className="bio-section">
          <Bio />
        </div>
        <div id="timeline" className="timeline-section">
          <Timeline />
        </div>
      </main>
    </div>
  );
};

export default App;

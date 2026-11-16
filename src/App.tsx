import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VenturesPage } from './pages/VenturesPage';
import { PashuPoshanPage } from './pages/PashuPoshanPage';
import { VillagersBitesPage } from './pages/VillagersBitesPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // If it's an anchor on the same or home page
    if (path.includes('#')) {
      const [targetPath, hash] = path.split('#');
      const cleanPath = targetPath || '/';
      if (cleanPath !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(cleanPath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.history.pushState({}, '', path);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route selector
  const renderCurrentPage = () => {
    if (currentPath === '/ventures/pashu-poshan') {
      return <PashuPoshanPage navigate={navigate} />;
    }
    if (currentPath === '/ventures/villagers-bites') {
      return <VillagersBitesPage navigate={navigate} />;
    }
    if (currentPath.startsWith('/ventures')) {
      return <VenturesPage navigate={navigate} />;
    }
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-900 font-sans selection:bg-[#F59E0B] selection:text-slate-950 overflow-x-hidden w-full max-w-full">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">{renderCurrentPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;

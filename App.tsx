import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResourcePortal from './pages/ResourcePortal';
import Archives from './pages/Archives';
import Services from './pages/Services';
import ELibrary from './pages/ELibrary';
import OurTeam from './pages/OurTeam';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource-portal" element={<ResourcePortal />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/services" element={<Services />} />
            <Route path="/elibrary" element={<ELibrary />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
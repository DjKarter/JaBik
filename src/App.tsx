import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent/Navbar.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import AboutPage from './pages/AboutPage';
import ArtworkPage from './pages/ArtworkPage';
import OrderPage from './pages/OrderPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
//<Route path="/about" element={<AboutPage />} />

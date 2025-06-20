import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminRoute from './components/admin/AdminRoute';
import PortfolioDetail from './components/PortfolioDetail';
import { PortfolioProvider } from './contexts/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/" element={
            <div className="min-h-screen w-full overflow-x-hidden">
              <Header />
              <Hero />
              <Services />
              <Portfolio />
              <About />
              <Contact />
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
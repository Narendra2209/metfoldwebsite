import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flashings from './pages/Flashings';
import Cladding from './pages/Cladding';
import Roofing from './pages/Roofing';
import Rainwater from './pages/Rainwater';
import Fabrication from './pages/Fabrication';
import Accessories from './pages/Accessories';
import GenericPage from './pages/GenericPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/flashings" element={<Flashings />} />
            <Route path="/cladding" element={<Cladding />} />

            <Route path="/roofing" element={<Roofing />} />
            <Route path="/roofing/corrugated" element={<Roofing />} />
            <Route path="/roofing/decking" element={<Roofing />} />

            <Route path="/rainwater" element={<Rainwater />} />
            <Route path="/rainwater/gutters" element={<Rainwater />} />
            <Route path="/rainwater/downpipes" element={<Rainwater />} />

            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/accessories" element={<Accessories />} />

            <Route path="/contact" element={<GenericPage title="Contact Us" />} />
            <Route path="/services" element={<GenericPage title="Our Services" />} />
            <Route path="/about" element={<GenericPage title="About Us" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

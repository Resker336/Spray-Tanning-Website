import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';


import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </main>

     <Footer />
    </div>
  );
}

export default App;
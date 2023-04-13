import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalculatorBMI from './components/CalculatorBMI';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path='/calculator' element={<CalculatorBMI/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

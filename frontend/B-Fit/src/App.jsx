import './App.css'
import LoginCard from './components/LoginCard'
import InputCard from './components/InputCard'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginCard/>
      <InputCard />
      <Footer />
    </div>
  );
}

export default App;

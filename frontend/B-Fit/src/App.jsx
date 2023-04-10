import './App.css'
import Footer from './components/Footer'
import InputCard from './components/InputCard'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <InputCard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
/* class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           This is an example project for practicing React routing
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/items">Items</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/items'   element={<div>List of items</div>}/>
                <Route exact path='/items/2'  element={<div>Item with id of 2</div>}/>
          </Routes>
          </div>
       </Router>
   );
  }
} */
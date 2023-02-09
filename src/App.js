import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/home">
          <Home/>
        </Route>

      </BrowserRouter>
    </>
  );
}

export default App;

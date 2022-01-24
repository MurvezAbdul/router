import {Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div >
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

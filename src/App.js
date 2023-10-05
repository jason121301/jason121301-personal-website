import About from './components/aboutPage/about.js'
import Home from './components/homePage/home'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;

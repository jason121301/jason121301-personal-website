
import Home from './components/homePage/home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element={<Home/>}></Route>
          <Route path="/jason121301-personal-website" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;

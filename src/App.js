import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homePage/home';

function App() {
  const basename = process.env.PUBLIC_URL || '/';
  
  return (
    <div className="App">
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


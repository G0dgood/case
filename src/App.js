import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/casestudies" component={CaseStudies} />
      </Router>
    </div>
  );
}

export default App;

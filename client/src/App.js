import React from 'react';
import MainPages from './mainpages/pages'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <MainPages />
        </div>
      </Router>
    </div>
  );
}

export default App;

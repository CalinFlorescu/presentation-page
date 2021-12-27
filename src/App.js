import React from 'react'
import Greetings from './components/Greetings'
import Resume from './components/Resume'
import Passions from './components/Passions'
import Contact from './components/Contact'
import Copyright from './components/Copyright'

import './App.css';

function App() {
  return (
    <React.Fragment className="app-container">
      <Greetings />
      <Passions />
      <Resume />
      <Contact />
      <Copyright />
    </React.Fragment>
  );
}

export default App;

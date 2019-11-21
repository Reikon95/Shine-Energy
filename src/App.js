import React from 'react';
import './App.css';
import Logo from './Logo/Logo';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';

function App() {
  return (
    <div className="App">
      <Logo />
      <Welcome userName={'Graham'} />
      <Form />
    </div>
  );
}

export default App;

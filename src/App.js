import React from 'react'
import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Compound Interest Calculator</h1>
      <hr />
      <h2 className="text-center">Data Input</h2>
      <Form />
      <hr />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import getDataFromServer from './data/getDataFromServer'

function App() {
  getDataFromServer('Madrid').then(data => console.log(data))
  getDataFromServer('Barcelona').then(data => console.log(data))
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

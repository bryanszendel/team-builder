import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [member, setMember] = useState({id: 1, data: {name: 'Bryan'}})
  console.log(member)
  return (
    <div className="App">
      <h2>{member.data.name}</h2>
    </div>
  );
}

export default App;

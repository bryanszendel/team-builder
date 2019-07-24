import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  
  const [member, setMember] = useState({id: 1, data: {name: 'Bryan'}})
  console.log(member)
  return (
    <div className="App">
      <div>
        <h2>{member.data.name}</h2>
      </div>
      <Form />
    </div>
  );
}

export default App;

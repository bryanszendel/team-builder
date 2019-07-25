import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import TeamList from './TeamList'

function App() {
  const memberData = [
    {id: 1, username: "Bryan Szendel", email: "bryan.szendel@gmail.com", role: "front_end_developer"},
  ]

  const [members, setMembers] = useState(memberData)
  
  const addMember = member => {
    member.id = members.length + 1
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <TeamList members={members}/>
      <Form 
        members={members} 
        setMembers={setMembers} 
        addMember={addMember}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import TeamList from './TeamList'

function App() {
  const memberData = [
    {id: 1, username: "Bryan Szendel", email: "bryan.szendel@gmail.com", role: "front_end_engineer"},
    {id: 2, username: "Leslie Szendel", email: "leslieszendel@gmail.com", role: "ux_designer"}
  ]

  const initialFormState = { id: null, username: "", email: "", role: ""}

  const [members, setMembers] = useState(memberData)
  const [currentMember, setCurrentMember] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addMember = member => {
    member.id = members.length + 1
    setMembers([...members, member])
  }

  const memberToEdit = member => {
    setCurrentMember({id: member.id, username: member.username, email: member.email, role: member.role})
  }

  // const editMember = member => {
  //   members.map(item => {

  //   })
  // }

  return (
    <div className="App">
      <TeamList members={members} memberToEdit={memberToEdit}/>
      <Form 
        members={members} 
        setMembers={setMembers} 
        addMember={addMember}
        currentMember={currentMember}
      />
    </div>
  );
}

export default App;

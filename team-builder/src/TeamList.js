import React from 'react'

function TeamList({members, memberToEdit}) {
// console.log('Mapped Members', props.members)
      return (
        <div className="team-list">
          {members.map(member => {
            return (
              <div>
                <h2 key={member.id}>{member.username}</h2>
                <button key={member.id} onClick={() => {
                  memberToEdit(member)
                  }}>EDIT</button>
              </div>
            )
          })}
        </div>
      )
}

export default TeamList;
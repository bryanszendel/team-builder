import React from 'react'

function TeamList(props) {
// console.log('Mapped Members', props.members)
      return (
        <div className="team-list">
          {props.members.map(member => {
            return (
              <div>
                <h2 {...props} key={member.id}>{member.username}</h2>
                <button>EDIT</button>
              </div>
            )
          })}
        </div>
      )
}

export default TeamList;

// {props.teamMembers.map(teamMember => {
//   return (
//       <CardMaker teamMember={teamMember}/>
//   )
// })}
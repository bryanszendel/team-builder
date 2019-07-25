import React, { useState, useEffect } from 'react';

function Form(props) {
  const initialFormState = { id: null, username: "", email: "", role: ""}
  const [user, setUser] = useState(initialFormState)

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value }
    setUser(updatedUser) 
    // console.log(user)
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addMember(user)
    setUser(initialFormState)
  }

  useEffect(() => {
    setUser(props.currentMember)
  }, [props])

return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Here is a Form</legend>
        <div className="form-container">
          <label htmlFor="username">
            Name:
            <div>
              <input type="text" name="username" value={user.username} onChange={handleChange}/>
            </div>
          </label>
          <label htmlFor="email">
            Email:
            <div>
              <input type="email" name="email" value={user.email} onChange={handleChange}/>
            </div>
          </label>
          <label htmlFor="role">
            Role:
            <div>
              <select type="select" name="role" value={user.role} onChange={handleChange}>
                <option value="choose">-- Choose Role --</option>
                <option value="ui_developer">UI Developer</option>
                <option value="front_end_engineer">Front End Engineer</option>
                <option value="back_end_engineer">Back End Engineer</option>
                <option value="ux_designer">UX Designer</option>
              </select>
            </div>
          </label>  
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form;
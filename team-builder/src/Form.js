import React, { useState } from 'react';

function Form() {
const [user, setUser] = useState({ username: '', email: '', role: '' })

function handleChange(event) {
  const updatedUser = { ...user, [event.target.name]: event.target.value };
  setUser(updatedUser)
}

function handleSubmit(event) {
  event.preventDefault();
  console.log('Username: ', user)
}

return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Here is a Form</legend>
        <div className="form-container">
          <label htmlFor="username">
            Name:
            <div>
              <input type="text" name="username" onChange={handleChange}/>
            </div>
          </label>
          <label htmlFor="email">
            Email:
            <div>
              <input type="email" name="email" onChange={handleChange}/>
            </div>
          </label>
          <label htmlFor="role">
            Role:
            <div>
              <select type="select" name="role" onChange={handleChange}>
                <option value="choose">-- Choose Role --</option>
                <option value="ui_developer">UI Developer</option>
                <option value="front_end_engineer">Front End Engineer</option>
                <option value="back_end_engineer">Back End Engineer</option>
                <option value="ui_developer">UX Designer</option>
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
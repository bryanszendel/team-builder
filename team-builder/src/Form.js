import React from 'react';

function Form() {
return (
    <form>
      <fieldset>
        <legend>Here is a Form</legend>
        <div className="form-container">
          <label htmlFor="username">
            Name:
            <div>
              <input type="text" name="name"/>
            </div>
          </label>
          <label htmlFor="email">
            Email:
            <div>
              <input type="email" name="email"/>
            </div>
          </label>
          <label htmlFor="role">
            Role:
            <div>
              <select type="select" name="role">
                <option value="ui_developer">UI Developer</option>
                <option value="front_end_engineer">Front End Engineer</option>
                <option value="back_end_engineer">Back End Engineer</option>
                <option value="ui_developer">UX Designer</option>
              </select>
            </div>
          </label>
        </div>
      </fieldset>
    </form>
  )
}

export default Form;
import React from 'react'

function Form(props) {
    const {teammates, change, submit} = props

    return (
      <div className="App">
        <form onSubmit={submit} >
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={teammates.name}
              onChange={change}
            />
          </label>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={teammates.email}
              onChange={change}
            />
          </label>
          <label>
            Age:
            <select name='age' value={teammates.age} onChange={change}>
              <option>---Select Age---</option>
              <option value="69">69</option>
              <option value="420">420</option>
              <option value="710">710</option>
              <option value="42">42</option>
              <option value="50">50</option>
            </select>
          </label>
          <button>Submit!</button>
        </form>
      </div>
    );
}
export default Form
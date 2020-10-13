import React, { useState } from 'react';
import './App.css';



function App() {
  const [teammates, setTeammates] = useState([]);
  const [formData, setFormData] = useState(
    { id: '', name: '', email: '', age: null }
  )
  
  const handleChange = event => {
    setFormData({...formData, [event.target.name]: [event.target.value], id: [teammates.length + 1]})
  }
  const handleSubmit = event => {
    event.preventDefault();
    setTeammates([...teammates, formData])
  }
  console.log(teammates)
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={teammates.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={teammates.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type='text'
            name='age'
            value={teammates.age}
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;

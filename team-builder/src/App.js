import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import CardMaker from './CardMaker'



function App() {
  const [teammates, setTeammates] = useState([]);
  const [formData, setFormData] = useState(
    { id: '', name: '', email: '', age: null }
  )
  
  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value, id: teammates.length + 1})
  }
  const handleSubmit = event => {
    event.preventDefault();
    setTeammates([...teammates, formData])
  }

  return (
    <div>
    <Form teammates={teammates} change={handleChange} submit={handleSubmit} />
    {teammates.map(teammate => {
      return <CardMaker teammate={teammate} />
  })}
    </div>
  );
}

export default App;

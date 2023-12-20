// AddPet.js

import React, { useState } from 'react';
import { addPet } from '../Services/api';

const AddPet = () => {
  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    location: '',
    dateAvailable: ''
  });

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPet(petData);
      if (res.status === 200) {
        alert('Pet added');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' id='name' placeholder='Name' onChange={handleChange} />
      <input type='text' id='breed' placeholder='Breed' onChange={handleChange} />
      <input type='text' id='age' placeholder='Age' onChange={handleChange} />
      <input type='text' id='location' placeholder='Location' onChange={handleChange} />
      <input type='text' id='dateAvailable' placeholder='Date Available' onChange={handleChange} />
      <button type='Submit'>Add Pet</button>
    </form>
  );
};

export default AddPet;

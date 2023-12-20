import axios from 'axios';

const URL = 'http://localhost:3000'; 

const getPets = () => axios.get(`${URL}/pets`);
const getPetById = (id) => axios.get(`${URL}/pets/${id}`);
const addPet = (data) => axios.post(`${URL}/pets`, data);
const editPet = (id, data) => axios.put(`${URL}/pets/${id}`, data);
const deletePet = (id) => axios.delete(`${URL}/pets/${id}`);
const getPetDetails = (id) => axios.get(`${URL}/pets/${id}`);
const addNewPet = (petData) => axios.post(`${URL}/pets`, petData);

export {
  getPets,
  getPetById,
  addPet,
  editPet,
  deletePet, getPetDetails, addNewPet
};

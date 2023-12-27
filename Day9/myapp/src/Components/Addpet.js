import React, { useState } from "react";
import { addPet } from "../Services/api";
import "../assets/Css/core.css";
import { useNavigate } from "react-router-dom";

export default function Addpet() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    image: "",
    name: "",
    breed: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPet(data);
      if (res.status === 201) {
        alert("Pet added");
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="text"
          id="name"
          placeholder="Pet's Name"
          onChange={handleChange}
        />
        <input
          type="text"
          id="breed"
          placeholder="Breed"
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="date"
          id="date"
          placeholder="Date"
          onChange={handleChange}
        />
        <button type="submit">Add Pet</button>
      </form>
    </>
  );
}

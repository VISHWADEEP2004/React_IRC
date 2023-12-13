import React from 'react';
import '../Assert/Css/home.css'
function PetCard({ name, age, breed, image }) {
  return (
    <div className="pet-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Breed: {breed}</p>
      <button>Adopt</button>
    </div>
  );
}

function Home() {
    
  const petsData = [
    {
      name: 'Willi',
      age: '2 years',
      breed: 'Labrador Retriever',
      image: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg',
    },
    {
      name: 'Janson',
      age: '3 years',
      breed: 'German Shepherd',
      image: 'https://w0.peakpx.com/wallpaper/524/533/HD-wallpaper-german-shepherd-dog-big-dog-forest-brown-black-dog-pets.jpg',
    },
    {
      name: 'Spantell',
      age: '3 years',
      breed: 'German Shepherd',
      image: 'https://www.hepper.com/wp-content/uploads/2021/11/Pomeranian.jpg',
    },
    
  ];

  return (
    <>
      <h2>Furry Friends for Adoption</h2>
    <div className="pets">
        
      {petsData.map((pet, index) => (
        <PetCard
          key={index}
          name={pet.name}
          age={pet.age}
          breed={pet.breed}
          image={pet.image}
        />
      ))}
    </div>
    </>
    
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import './DogsByBreed.css';

const DogsByBreed = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);

  useEffect(() => {
    fetch(`http://localhost:3000/breed/${breed}`)
      .then(data => data.json())
      .then(result => {
        setDogs(result)
      })
  }, [breed])

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setBreed(breed)}>{breed}</button>
      )}
      <div className='dogs-list'>
        {dogs.length !== 0 &&
          dogs.map(url =>
            <img src={url} key={url} alt="Dog" width="300" />)
        }
      </div>
    </div>
  )
}

export default DogsByBreed;

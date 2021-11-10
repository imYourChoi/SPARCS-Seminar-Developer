import React, { useEffect, useState } from 'react';
import LikeButton from './LikeButton';

const DogSNS = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);
  const [like, setLike] = useState(0);
  const [stat, setStat] = useState([
    false,
    false,
    false,
    false,
    false
  ]);

  const handleclick = (i) => {
    if (stat[i] === true) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    stat[i] = !stat[i]
    setStat(stat)
  }

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
      <div>There are {like} likes</div>
      <div className='dogsns-list'>
        {dogs.length !== 0 &&
          dogs.map((url, i) =>
            <div className='dogsns-row' key={url}>
              <img src={url} alt="Dog" width="300" />
              <LikeButton onClick = {()=>handleclick(i)} isLiked = {stat[i]}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DogSNS;

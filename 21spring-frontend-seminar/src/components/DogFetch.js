import React, { useState, useEffect } from 'react';

const DogFetch = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/dog-fetch/')
      .then(data => data.json())
      .then(result => {
        setImageURL(result)
      });
  }, [])

  return (
    <div>
      {imageURL !== "" && <img src={imageURL} alt="Dog" />}
    </div>
  )
}

export default DogFetch;

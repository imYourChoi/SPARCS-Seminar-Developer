import React, { useState, useEffect } from 'react';

const DogFetch = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/dog-fetch/')
      .then(data => {
        // console.log(data.json())
        return data.json()
      })
      .then(result => {
        // console.log(result)
        setImageURL(result.message)
      });
  }, [])

  return (
    <div>
      {imageURL !== "" && <img src={imageURL} alt="Dog" />}
    </div>
  )
}

export default DogFetch;

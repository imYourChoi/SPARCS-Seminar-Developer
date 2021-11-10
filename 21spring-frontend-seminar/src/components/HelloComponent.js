import React from 'react'



const HelloComponent = (props) => {
  const onClickHandler = () => {
    alert('Click!');
  }

  // return <div>{props.message}</div>;
  return <button onClick = {onClickHandler}>{props.message}</button>
}

export default HelloComponent;
import React from 'react'
import "./UserCard.css";
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='Name'>{props.name}</p>
        <img id='user-img'src='https://images.pexels.com/photos/37290387/pexels-photo-37290387.jpeg ' height="200px" width="200" alt='love'></img>
      <p id='About'>{props.desc}</p>
    </div>
  )
}

export default UserCard

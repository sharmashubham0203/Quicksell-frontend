import React from 'react'
import './Card.css'
import {LuMoreHorizontal} from 'react-icons/lu';

const Card = ({ id, title, tag }) => {
  return (
    <div className="ticket-card">
      <div className="card-nav">
      <div className="card-id">{id}</div>
      <div className="imageContainer">
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="UserImage" />
      </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-container">
      <div className="urgent-icon"><LuMoreHorizontal color="#797d84" />
      </div>
      <div className="card-tag"> <div className='tag-icon'></div>{tag}</div>
      </div>
    </div>
  )
}

export default Card
import React from 'react'
import '../assets/css/SidebarChat.css'
import { Avatar } from '@mui/material'
const SidebarChat = (props) => {
  return (
    <div className='sidebarChat'>
      <Avatar src={props.image_url} />
      <div className="sidebarChat_info">
        <h2>{props.name}</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat

import React from 'react'
import '../assets/css/Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
    
        <Avatar src='https://firebasestorage.googleapis.com/v0/b/realter-84e7f.appspot.com/o/1701963112314WhatsApp%20Image%202023-09-30%20at%2023.01.33.jpg?alt=media&token=f19b0110-fd43-485c-b41a-837660cb75da'/>

        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined/>
          <input type="text" placeholder='Search or start new chat' />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat 
        image_url='https://pxbar.com/wp-content/uploads/2023/09/single-boys-pics.jpg'
        name="Ankit bajaj" 
        />
        <SidebarChat 
        image_url='https://pxbar.com/wp-content/uploads/2023/09/dp-for-instagram-boy.jpg'
        name="Pradeep B.tech"
        />
        <SidebarChat 
        image_url='https://pxbar.com/wp-content/uploads/2023/09/boy-dp-pic-attitude.jpg'
        name="Anuj thakur B.tech"
        />
        <SidebarChat 
        image_url='https://pxbar.com/wp-content/uploads/2023/09/profile-picture-for-boys.jpg'
        name="Prakash B.tech"
        />
        <SidebarChat 
        image_url='https://pxbar.com/wp-content/uploads/2023/09/attitude-boys-dp.jpg'
        name="Preeti B.tech"
        />
      </div>
    </div>
  )
}

export default Sidebar

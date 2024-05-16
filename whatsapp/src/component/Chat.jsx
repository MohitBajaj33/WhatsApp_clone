import React, { useState } from 'react'
import '../assets/css/Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import axios from '../axios.js'
const Chat = ({messages}) => {
  const [input,setInput] = useState("");
  // const SetInput
  const sendMessage = async(e)=>{
     e.preventDefault();
     const hours = new Date().getHours()
     const minut = new Date().getMinutes()
     var time = hours + ":" + minut
    await axios.post('/messages/new',{
      message: input,
      name: "mohit bajaj",
      timestamp: time,
      recieved: true
     })
     setInput('');
  }
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar src='https://pxbar.com/wp-content/uploads/2023/09/single-boys-pics.jpg' />
        <div className="chat_headerInfo">
          <h3>Ankit bajaj</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) =>(
 
         <p className={`chat_message ${message.recieved && "chat_reciever"}`}>
          <span className='chat_name'>{message.name}</span>
          {message.message}
          <span className="chat_timestamp">
            {message.timestamp}
          </span>
        </p>
          ))}
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form action="">
          <input
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Type a message'
            type="text" />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>

        </form>
        <Mic/>
      </div>

    </div>
  )
}

export default Chat

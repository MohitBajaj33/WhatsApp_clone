import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./component/Chat";
import Sidebar from "./component/Sidebar";
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
      axios.get('/messages/sync').then(response=>{
        setMessages(response.data)
      })
  },[])


  useEffect(() => {
    // once
    var pusher = new Pusher("9104eb46ab580ccb5e37", {
      cluster: "eu",
    });
    var channel = pusher.subscribe("message");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat component */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;

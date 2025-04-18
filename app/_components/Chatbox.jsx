"use client"
import { useEffect, useRef, useState } from "react"
import Chat from "./Chat"
import ChatInput from "./ChatInput"

// Sending GET request from the client side (browser)



import { getSession } from 'next-auth/react'
import { io } from "socket.io-client"
function Chatbox({session}) {
    console.log(session);
     async function fetchToken() {
  try {
    const response = await fetch('/api/auth'); // Path relative to your app
    const data = await response.json();
    
    console.log('Token Data:', data);
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}


    
    let socket = useRef(null);
    const [chat,setChat] = useState([]);
    
    useEffect(async function(){
        const sessionTwo = await getSession();
        console.log('session2: ',sessionTwo);
        // socket.current = io('https://chat-api-cfe5.onrender.com');
        socket.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);
        socket.current.on("newMessage", (newMessage) => {
            console.log(newMessage.photo)
          // setChat((messages) => [...messages, { message: newMessage }]);
            setChat((messages) => [...messages, {message:newMessage}]);
        });
        return ()=>{
            socket.current.disconnect();
            
        }
    },[])
    return (
        <div className="bg-white h-[30rem] w-[80%] flex flex-col justify-between">
            <button onClick={fetchToken}>click here now</button>
            <div className="border h-[90%] overflow-auto p-5">
                {chat.map((el,i)=>{
                    // return <Chat session={session} chat={el} key={i}/>
                    return <Chat session={session} chat={el} key={i}/>
                })}
            </div>
            <div>
                <ChatInput session={session}/>
            </div>
        </div>
    )
}

export default Chatbox

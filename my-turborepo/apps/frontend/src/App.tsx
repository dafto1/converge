import { useState, useEffect } from 'react'

import './App.css'


function App() { 

  
  const [ws , setWs] = useState(new WebSocket("ws://localhost:8080"))
  useEffect(() => {
    if (ws) { 
      ws.onopen = () => {
        ws.send("your message here"); // Sent safely after connection is open
      };
    }
  }, [ws]) 

  return (
    <>

      hi there
    </>
  )
} 

export default App; 
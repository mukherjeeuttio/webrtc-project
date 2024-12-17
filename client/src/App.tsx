import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import socketIO from 'socket.io-client';

const WS = 'http://localhost:8080';


function App() {
  useEffect(() => {
    socketIO(WS);
  })

  return (
    <div className="App">
      <button>Start new meeting</button>
    </div>
  )
}

export default App

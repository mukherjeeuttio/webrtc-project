import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { RoomProvider } from './context/RoomContext.tsx'
import { Home } from "./pages/Home.tsx";
import { Room } from "./pages/Room.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/room/:id" element={<Room />}/>
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  </StrictMode>,
)

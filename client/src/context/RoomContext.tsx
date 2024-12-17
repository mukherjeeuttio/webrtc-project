import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
const WS = 'http://localhost:8080';

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WS);

export const RoomProvider: React.FunctionComponent = ({ children }) => {
    const navigate = useNavigate();
    const enterRoom = ({ roomId }: { roomId: "string" }) => {
        console.log({ roomId });
        navigate(`/room/${roomId}`);
    }
    useEffect(() => {
        ws.on("room-created", enterRoom);
    }, []);
    return (
        <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>
    )
}
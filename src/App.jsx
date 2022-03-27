import { useEffect, useRef, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { AuthContext, SocketContext } from "./context";
import { io } from "socket.io-client";
import { SERVER_URL } from "./config";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL);
    console.log(socketRef.current);
  }, []);

  return (
    <Box bg="gray.50" w="100vw" h="100vh">
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <SocketContext.Provider value={{ socketRef }}>
          <Header />
          {isAuth ? <Chat /> : <Login />}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </Box>
  );
}

export default App;

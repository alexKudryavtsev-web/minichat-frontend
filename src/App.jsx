import { useEffect, useRef, useState } from "react";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import { AuthContext, SocketContext } from "./context";
import { io } from "socket.io-client";
import { SERVER_URL } from "./config";
import { Box } from "@chakra-ui/react";
import Header from "./components/header/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL);
  }, []);

  return (
    <Box bg="gray.50" minWidth="100vw" minHeight="100vh" w="100%" h="100%">
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, username, setUsername }}
      >
        <SocketContext.Provider value={{ socketRef }}>
          <Header />
          {isAuth ? <Chat /> : <Login />}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </Box>
  );
}

export default App;

import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext, SocketContext } from "../../context";

function Login() {
  const { setIsAuth, username, setUsername } = useContext(AuthContext);
  const { socketRef } = useContext(SocketContext);

  function loginBtnHandler() {
    if (username.trim()) {
      setIsAuth(true);
      socketRef.current.emit("login", username);
    }
  }

  return (
    <Flex justifyContent="center" paddingTop={30}>
      <Flex
        justify="center"
        flexDir="column"
        bg="white"
        p={3}
        minW={300}
        maxW={500}
        border="1px"
        borderColor="gray.200"
      >
        <Box m={2}>
          <Heading size="md">Login</Heading>
        </Box>
        <Box m={2}>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </Box>
        <Box m={2}>
          <Button onClick={loginBtnHandler} colorScheme="red">
            login
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Login;

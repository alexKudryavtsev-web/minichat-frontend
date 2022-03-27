import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext, SocketContext } from "../context";

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const { socketRef } = useContext(SocketContext);
  const [name, setName] = useState("");

  function loginBtnHandler() {
    if (name.trim()) {
      setIsAuth(true);
      socketRef.current.emit("login", name);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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

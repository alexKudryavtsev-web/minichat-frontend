import { Box, Center, Flex, IconButton, Input } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import { SocketContext } from "../context";

function CreateMessagePanel() {
  const [message, setMessage] = useState("");
  const { socketRef } = useContext(SocketContext);

  function submitBtnHandler() {
    if (message) {
      socketRef.current.emit("message", message);
      setMessage("");
    }
  }
  return (
    <Center>
      <Flex
        justify="center"
        bg="white"
        border="1px"
        borderColor="gray.200"
        width="90%"
        p={2}
        m={2}
      >
        <Box flex={1} m={1}>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        </Box>
        <Box m={1}>
          <IconButton
            colorScheme="green"
            icon={<ChatIcon />}
            onClick={submitBtnHandler}
          />
        </Box>
      </Flex>
    </Center>
  );
}

export default CreateMessagePanel;

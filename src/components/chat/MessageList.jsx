import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext, SocketContext } from "../../context";
import EventMessage from "./EventMessage";
import NormalMessage from "./NormalMessage";
import SelfMessage from "./SelfMessage";

function MessageList() {
  const [messageList, setMessageList] = useState([]);
  const { socketRef } = useContext(SocketContext);
  const { username } = useContext(AuthContext);

  function addMessage(message) {
    setMessageList((prev) => [...prev, message]);
  }

  function addHistory(history) {
    setMessageList(history);
  }

  useEffect(() => {
    socketRef.current.on("history", addHistory);
    socketRef.current.on("message", addMessage);
  }, []);

  return (
    <Flex
      width="90vw"
      margin="auto"
      flexDir="column"
      paddingBottom={5}
      paddingTop={5}
      align="flex-start"
    >
      {messageList.map((msg) =>
        msg.isEvent ? (
          <EventMessage {...msg} key={msg.id} />
        ) : msg.username === username ? (
          <SelfMessage {...msg} key={msg.id} />
        ) : (
          <NormalMessage {...msg} key={msg.id} />
        )
      )}
    </Flex>
  );
}

export default MessageList;

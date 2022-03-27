import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context";
import MessageItem from "./MessageItem";

function MessageList() {
  const [messageList, setMessageList] = useState([]);
  const { socketRef } = useContext(SocketContext);

  function pushMessage(message) {
    setMessageList((prev) => [...prev, message]);
  }

  useEffect(() => {
    socketRef.current.on("event", pushMessage);
    socketRef.current.on("message", pushMessage);
  }, []);

  return (
    <Flex flexDir="column" paddingLeft={10}>
      {messageList.map((msg) => (
        <MessageItem key={msg.contentMessage} msg={msg} />
      ))}
    </Flex>
  );
}

export default MessageList;

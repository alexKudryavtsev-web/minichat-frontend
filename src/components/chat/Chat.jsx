import React from "react";
import CreateMessagePanel from "./CreateMessagePanel";
import MessageList from "./MessageList";

function Chat() {
  return (
    <>
      <CreateMessagePanel />
      <MessageList />
    </>
  );
}

export default Chat;

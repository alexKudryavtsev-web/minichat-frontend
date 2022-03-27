import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function MessageItem({ msg }) {
  return (
    <Flex align="center">
      <Heading size="md" flex={1}>
        {msg.name || "event"}
      </Heading>
      <Box flex={9}>
        <Heading size="xs">{msg.contentMessage}</Heading>
      </Box>
    </Flex>
  );
}

export default MessageItem;

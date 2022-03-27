import { Flex } from "@chakra-ui/react";
import React from "react";

function EventMessage({ message }) {
  return (
    <Flex width="90vw" m={1} justify="center" fontSize="12px">
      {message}
    </Flex>
  );
}

export default EventMessage;

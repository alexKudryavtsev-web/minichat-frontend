import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Flex
      bg="white"
      p={3}
      borderBottom="1px"
      borderColor="gray.200"
      justify="center"
    >
      <Heading>MiniChat</Heading>
    </Flex>
  );
}

export default Header;

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import formatDate from "../../utils/formatDate";

function NormalMessage({ message, date, username }) {
  return (
    <Flex
      width="90vw"
      bg="white"
      m={1}
      p={2}
      border="1px"
      borderColor="gray.100"
      borderRadius={4}
    >
      <Box color="blue" marginRight={2}>
        {username}
      </Box>
      <Box flex={1}>{message}</Box>
      <Box marginLeft={2} fontWeight="bold">
        {formatDate(date)}
      </Box>
    </Flex>
  );
}

export default NormalMessage;

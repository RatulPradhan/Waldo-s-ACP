import { Flex, Image, Text } from "@chakra-ui/react";

function Navbar({username}) {
  return (
    <Flex bg="white" height="60px" padding="6px 40px" position="sticky" top="0" align="center"
      justify="space-between"
      boxShadow="md" >
      <Flex>
        <Image src="/images/Waldos-Logo.svg" height="50px" />
      </Flex>
      <Flex align="center">
        <Text fontSize="lg" color="gray.700" fontWeight="bold" mr={2}>
          {username}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Navbar;

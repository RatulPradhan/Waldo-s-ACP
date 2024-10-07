import { Flex, Image } from "@chakra-ui/react";

function Navbar(){
    return (
      <Flex bg="white" height="60px" padding="6px 40px" position='sticky' top='0'>
        <Flex>
          <Image src="/images/Waldos-Logo.svg" height='50px'/>
        </Flex>
      </Flex>
    );
}

export default Navbar;
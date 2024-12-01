import { Flex, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    //creating a state where we can toggle the color
    const {colorMode ,toggleColorMode} = useColorMode()
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
        <Image
        cursor={'pointer'}
        alt='logo'
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}/>
    </Flex>
  )
}

export default Header

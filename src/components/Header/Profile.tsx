import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export const Profile = () => {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Basaglia</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          bbcvasconcellos@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Bruno Basaglia" src="https://github.com/bbcvasconcellos.png"/>
    </Flex>
  )
}
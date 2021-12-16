import { Avatar, Box, Flex, Text } from "@chakra-ui/react"


interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData=true }: ProfileProps) => {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Basaglia</Text>
          <Text 
            color="gray.300" 
            fontSize="small"
          >
            bbcvasconcellos@gmail.com
          </Text>
      </Box>
      )}
      <Avatar size="md" name="Bruno Basaglia" src="https://github.com/bbcvasconcellos.png"/>
    </Flex>
  )
}
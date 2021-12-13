import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddFill } from "react-icons/ri"

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}//1480
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">.</Text>
      </Text>
      <Flex 
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search in platform..."
          _placeholder={{
            color: "gray.400"
          }}
        />
        <Icon as={RiSearchLine} fontSize="20"/> 
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
      <HStack 
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddFill} fontSize="20" />
      </HStack>
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
      </Flex>
      

    </Flex>
  )
}
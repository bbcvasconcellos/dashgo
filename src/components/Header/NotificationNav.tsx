import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddFill } from "react-icons/ri";
 

export const NotificationNav = () => {
  return (
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
  )
}
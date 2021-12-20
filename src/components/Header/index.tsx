import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react"
import { useSidebarDrawer } from "../../provider/SidebarDrawerContext"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { RiMenuLine } from "react-icons/ri"


export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  //o hook abaixo vai somente mostrar algumas informacoes de perfil a mais para telas grandes, senao mostra somente a foto de perfil 
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideScreen && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />
      {isWideScreen && <Search />}
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWideScreen}/>
      </Flex>


    </Flex>
  )
}
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import Link from "next/link"
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends LinkProps { //gives us access to all the other props from Link
  icon: ElementType; //property that allow us to pass the icon/image name without being a string
  children: string;
  href: string
}


export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink 
      display="flex" 
      align="center" 
      {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink> 
  )
}
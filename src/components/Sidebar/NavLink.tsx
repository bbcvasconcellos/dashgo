import { Icon, Link, LinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"


interface NavLinkProps extends LinkProps { //gives us access to all the other props from Link
  icon: ElementType; //property that allow us to pass the icon/image name without being a string
  children: string
}


export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
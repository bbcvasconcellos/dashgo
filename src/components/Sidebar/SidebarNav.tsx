import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";


export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="OVERALL">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Users</NavLink>
        </NavSection>
        <NavSection title="AUTOMATION">
          <NavLink icon={RiInputMethodLine} href="/forms">Forms</NavLink>
          <NavLink icon={RiGitMergeLine} href="automation">Automation</NavLink>
        </NavSection>
      </Stack>
  )
}
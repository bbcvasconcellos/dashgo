import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn; //UseDisclosureReturn is the useDisclosure return value type

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure(); //hook from chakra that allow us to get open/close properties from the sidenav
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]) //[router.asPath] whenever the route changes

  return (
    <SidebarDrawerContext.Provider value={ disclosure }>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

//to avoid repeat the useContext declaration everywhere, we create our own context here!
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)









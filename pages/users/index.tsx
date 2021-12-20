import { Box, Button, Flex, Heading, Icon, Table, Thead, Th, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../../src/components/Header";
import { Sidebar } from "../../src/components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../src/components/Pagination";


export default function UserList () {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
   
  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink" 
                leftIcon={<Icon as={ RiAddLine } fontSize="20"/>}
              >
                New user
              </Button> 
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>User</Th>
                  {isWideVersion && <Th>Register date</Th>}
                  <Th w="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Bruno Basaglia</Text>
                      <Text fontSize="sm" color="gray.300">bbcvasconcellos@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>February 25th, 2021</Td>}
                  <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={ RiPencilLine } fontSize="16"/>}
                  >
                    {isWideVersion ? 'Edit' : ''}
                  </Button> 
                  </Td>
                </Tr>
              </Tbody>
            </Table>  
            <Pagination />
        </Box>
      </Flex>  

    </Box>
  );
}


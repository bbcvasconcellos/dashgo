import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react" 
import { Input } from "../src/components/Form/Input"

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    > 
      <Flex 
        as="form" 
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"  
      >
        <Stack spacing="4">
          <Input 
            name="email"
            label="Email"
            type="email"
          />
          <Input 
            name="password"
            label="Password"
            type="password"
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          transition="transform 0.3s, filter 0.3s"
          _hover={{
            transform: "scale(1.02)",
            filter: "brightness(0.8)"
          }}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

import { Flex, Button, Stack } from "@chakra-ui/react" 
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../src/components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async(values) => {
      await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    > 
      <Flex 
        as="form" 
        onSubmit={handleSubmit(handleSignIn)} //passa a funcao dentro da propriedade handleSubmit do hook useForm
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
            {...register("email")}
          />
          <Input 
            name="password"
            label="Password"
            type="password"
            {...register("password")}
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
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

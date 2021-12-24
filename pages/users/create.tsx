import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../src/components/Form/Input";
import { Header } from "../../src/components/Header";
import { Sidebar } from "../../src/components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Mandatory field'),
  email: yup.string().required().email(),
  password: yup.string().required().min(6, "Passwords must contain at least six characters"),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], "Passwords must match!")
})


export default function CreateUser () {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Create user</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" {...register('name')} error={errors.name}/>
              <Input name="email" label="Email" type="email" {...register('email')} error={errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" label="Password" type="password" {...register('password')} error={errors.password}/>
              <Input name="password_confirmation" label="Confirm password" type="password" {...register('password_confirmation')} error={errors.password_confirmation} />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify={["center","center", "flex-end"]}>
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>

          </Flex>
        </Box>
      </Flex>  

    </Box>
  );
}


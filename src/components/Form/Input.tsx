import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from "react-hook-form" 
import { forwardRef, ForwardRefRenderFunction } from "react"

//tipa os elementos de input e incluindo as demais props de Input
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

//encaminhamento de input
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
        <ChakraInput  
          name={name}
          id={name} 
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          size="lg"
          _hover={{
            bgColor: "gray.900"
          }} 
          ref={ ref } 
          {...rest}
        />
        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}   
      </FormControl>
  )
}

//exporta o o input encaminhando a ref
export const Input = forwardRef(InputBase)
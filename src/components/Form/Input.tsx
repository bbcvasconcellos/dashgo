import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react' 
import { forwardRef, ForwardRefRenderFunction } from "react"

//tipa os elementos de input e incluindo as demais props de Input
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

//encaminhamento de input
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest}, ref) => {
  return (
    <FormControl>
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
      </FormControl>
  )
}

export const Input = forwardRef(InputBase)
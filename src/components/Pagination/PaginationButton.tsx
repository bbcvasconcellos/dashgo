import { Button, ButtonProps } from "@chakra-ui/react"

interface PaginationButtonProps extends ButtonProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export const PaginationButton = ({ pageNumber, isCurrent = false, ...rest }: PaginationButtonProps) => {
    if(isCurrent){
      return (
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
          _hover={{
            bg: "gray.500"
          }}
          {...rest}
        >
          { pageNumber }
        </Button>
      )
    }
    return(
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500"
        }}
        {...rest}
      >
        { pageNumber }
      </Button>
    )
}   


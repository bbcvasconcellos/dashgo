import { Box, Stack } from "@chakra-ui/react"
import { PaginationButton } from "./PaginationButton"

export const Pagination = () => {
  return(
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton isCurrent pageNumber={1}/>  
        <PaginationButton pageNumber={2}/> 
        <PaginationButton pageNumber={3}/> 
        <PaginationButton pageNumber={4}/> 
      </Stack>
    </Stack>
  )
}
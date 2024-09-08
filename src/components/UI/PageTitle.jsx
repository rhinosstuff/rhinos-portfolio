import { Heading } from '@chakra-ui/react';

export default function PageTitle({title}) {
  return (
    <Heading as='h1' size='xl' mb={4}>
      {title}  
    </Heading>
  )
}
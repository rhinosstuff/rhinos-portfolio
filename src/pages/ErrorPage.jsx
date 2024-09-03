import { useRouteError } from 'react-router-dom';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      maxW='container.md'
      centerContent
      p={4}
    >
      <Box
        bg='#982B1C'
        color='#F2E8C6'
        p={6}
        borderRadius='md'
        boxShadow='md'
        textAlign='center'
      >
        <Heading as='h1' size='lg' mb={4}>
          Oops!
        </Heading>
        <Text fontSize='lg' mb={4}>
          Sorry, an unexpected error has occurred.
        </Text>
        <Text fontStyle='italic'>
          {error.statusText || error.message}
        </Text>
      </Box>
    </Container>
  );
}
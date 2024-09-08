import { Box, Text, Button, Heading } from '@chakra-ui/react';
import PageTitle from '../components/UI/PageTitle';

export default function AboutMe() {
  return (
    <Box p={5}>
      <Box>
        <Text fontSize='lg'>
          Hi, my name is
        </Text>
        <Heading>
          Ryan Osguthorpe
        </Heading>
      </Box>
      
      <Button colorScheme='teal' mt='4' bg='my.100' color='my.800' _hover={{ bg: 'my.200', color: 'my.700' }} >Contact Me</Button>
    </Box>
  );
}
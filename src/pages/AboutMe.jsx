import { Box, Flex, Text, Button, Heading, Image } from '@chakra-ui/react';
import RyanO from '../assets/images/ryan-osguthorpe.png'

export default function AboutMe() {
  return (
    <Box p={5} mx='auto' maxW='800px'>
      <Flex direction={{ base: 'column', md: 'row' }} >
      <Flex direction='column' mr={{ md: 6 }} alignItems={{ base: 'flex-start'}}>
          <Text fontSize='lg' whiteSpace='nowrap'>
            Hi, my name is
          </Text>
          <Heading mb={3} whiteSpace='nowrap'>
            Ryan Osguthorpe
          </Heading>
          <Image src={RyanO} height={300} objectFit='cover' alt='Ryan Osguthorpe'></Image>
        </Flex>
        <Text mt={{ base: 3, md: 0 }} maxW='600px' whiteSpace='normal' alignSelf='flex-end'>
          I'm a motivated and detail-oriented entry-level programmer with a strong foundation in full-stack web development. <br/><br/> Seeking to leverage newly acquired skills in JavaScript, Node.js, React, and database management to contribute to a forward-thinking tech company. <br/><br/> Eager to apply problem-solving skills and hands-on coding experience to build efficient and scalable applications.
        </Text>
        
      </Flex>
      
      <Button as='a' href='/contact' mt='4' colorScheme='my'>Lets Connect</Button>
    </Box>
  );
}
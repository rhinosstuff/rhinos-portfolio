import { Box, Text, Button, Heading, Image } from '@chakra-ui/react';
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
        <Text mt='3'>
          I'm an enthusiastic software engineer that loves to solve issues and streamline projects. <br/>I am currently finishing up my software engineering bootcamp (Sep 26, 2024) but I am ready to get to work now.
        </Text>
        <Image></Image>
      </Box>
      
      <Button mt='4' bg='my.100' color='my.800' _hover={{ bg: 'my.200', color: 'my.700' }} >Hire Me</Button>
    </Box>
  );
}
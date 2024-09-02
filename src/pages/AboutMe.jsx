import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg" mb={4}>
        I am a passionate web developer with experience in building responsive and accessible web applications.
      </Text>
      <Button colorScheme="teal">Contact Me</Button>
    </Box>
  );
}
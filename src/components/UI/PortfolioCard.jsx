import { Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function Card({ projectTitle, projectImage, projectLink }) {
  return (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" shadow="md">
      <Image src={projectImage} alt={projectTitle} borderRadius="md" />
      <Box mt="3">
        <LinkOverlay href={projectLink} target="_blank" rel="noopener noreferrer">
          <Text fontSize="lg" fontWeight="bold">
            {projectTitle}
          </Text>
        </LinkOverlay>
        <Text mt="2" color="gray.500">
          Click the card to view the project
        </Text>
      </Box>
    </LinkBox>
  );
}
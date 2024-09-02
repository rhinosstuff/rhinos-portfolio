import { Box, Flex, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Navbar({ links }) {
  return (
    <Box as="nav" bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <UnorderedList styleType="none" display="flex" m={0} p={0}>
          {links.map((link) => (
            <ListItem key={link.key} m={2}>
              {link}
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  );
}
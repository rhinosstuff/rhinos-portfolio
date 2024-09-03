import { Box, Flex, UnorderedList, ListItem, useColorMode, IconButton, Text, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import RhinoLogo from '../../assets/rhino.svg';

export default function Navbar({ links }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='nav' bg='#800000' p={4}>
      <Flex direction={{ base: 'column', md: 'row' }} align='center'>
        <Flex align='center'>
          <UnorderedList styleType='none' display='flex' ml={0}>
            {links.map((link) => (
              <ListItem key={link.key} m={2}>
                {link}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
        <Flex 
          direction='row'
          align='center'
          mr={{ base: 0, md: 3 }}
          ml={{ base: 0, md: 'auto' }}
          mt={{ base: 4, md: 0 }}
        >
          <IconButton
            aria-label='Toggle color mode'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            variant='ghost'
            color={colorMode === 'light' ? 'black' : 'yellow.400'} 
            _hover={{
              bg: colorMode === 'light' ? 'yellow.600' : 'yellow.600', 
              color: colorMode === 'light' ? 'black' : 'yellow.200',
            }}
          />
          <Image src={RhinoLogo} alt='Rhino Logo' boxSize='50px' mr={2} />
          <Text fontSize='xl' fontWeight='bold' color='#DAD4B5'>
            rhinosstuff
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
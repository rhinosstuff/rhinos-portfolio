import { Box, Heading, Flex, UnorderedList, ListItem, useColorMode, IconButton, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import RhinoLogo from '../../assets/images/rhino.svg';

export default function Navbar({ links }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='nav' bg='my.800' p={4}>
      <Flex direction={{ base: 'column', md: 'row' }}>
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
            color={colorMode === 'light' ? 'gray.400' : 'yellow.400'} 
            _hover={{
              bg: colorMode === 'light' ? 'my.700' : 'my.700', 
              color: colorMode === 'light' ? 'gray.200' : 'yellow.200',
            }}
          />
          <Image src={RhinoLogo} alt='Rhino Logo' boxSize='50px' mr={2} />
          <Heading as='h1' size='xl' fontWeight='bold' color='my.200'>
            rhinosstuff
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
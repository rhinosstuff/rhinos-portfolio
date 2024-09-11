import { Box, Heading, Flex, UnorderedList, ListItem, useColorMode, IconButton, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import RhinoLogo from '../../assets/images/rhino.svg';

export default function Navbar({ links }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='nav' bgGradient='linear(to-b, my.100 0%, my.700 65%, my.800 150%)' p={4}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex align='center'>
          <Heading as='h1' size='xl' fontWeight='bold' color='my.100'>
            rhinosstuff
          </Heading>
          <Image src={RhinoLogo} alt='Rhino Logo' boxSize='50px' transform="scaleX(-1)" ml={3} mt={2} />
          <IconButton
            aria-label='Toggle color mode'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon transform="scaleX(-1)" /> : <SunIcon />}
            variant='ghost'
            color={colorMode === 'light' ? 'gray.300' : 'yellow.400'} 
            _hover={{
              color: colorMode === 'light' ? 'gray.200' : 'yellow.200',
            }}
          />
          
        </Flex>
        <Flex 
          direction='row'
          align='center'
          mr={{ base: 0, md: 3 }}
          ml={{ base: 0, md: 'auto' }}
          mt={{ base: 4, md: 0 }}
        >
          <UnorderedList styleType='none' display='flex' ml={0}>
            {links.map((link) => (
              <ListItem key={link.key} m={2}>
                {link}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>
    </Box>
  );
}
import { Box, Flex, Image, Text, Card, CardBody, CardFooter, Heading, Button, IconButton } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { useState } from 'react';

export default function ProjectCard({ projectTitle, projectImage, projectDescription, projectLink, projectRepository }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box 
      perspective='1000px' 
      onMouseEnter={() => setIsFlipped(true)} 
      onMouseLeave={() => setIsFlipped(false)} 
      width='300px' 
      height='400px'
    >
      <Box 
        width='100%' 
        height='100%'
        transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'} 
        transformstyle='preserve-3d' 
        transition='transform 1.4s ease-in-out'
      >
        {/* Front of the card */}
        <Box 
          position='absolute' 
          width='100%' 
          height='100%' 
          backfacevisibility='hidden' 
          zIndex={isFlipped ? 0 : 2} // Ensure front stays visible
          borderRadius={18}
          transition='z-index 0.6s 0.6s'
        >
          <Card borderWidth={3} borderRadius={18} height='100%' overflow='hidden'>
            <Image
              objectFit='cover'
              width='100%'
              height='100%'
              src={projectImage}
              alt={projectTitle}
            />
          </Card>
        </Box>

        {/* Back of the card */}
        <Box 
          position='absolute' 
          width='100%' 
          height='100%' 
          transform='rotateY(180deg)' 
          backfacevisibility='hidden' 
          zIndex={isFlipped ? 2 : 0} // Ensure back shows when flipped
          borderRadius={18}
          display='flex'
          flexDirection='column'
          transition='z-index 0.6s 0.4s'
        >
          <Card borderWidth={3} borderRadius={18} height='100%' display='flex' flexDirection='column'>
            <CardBody 
              overflowY='auto' 
              flexGrow={1} 
              padding='1.5rem'
              css={{
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#ccc',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#aaa',
                },
              }}
            >
              <Heading size='lg'>{projectTitle}</Heading>
              <Text py='3'>{projectDescription}</Text>
            </CardBody>
            <CardFooter display='flex' justifyContent='center' padding='1rem' gap='3'>
              <Button
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href={projectLink}
                variant='solid'
                bg='my.200'
                color='my.600'
                fontSize={['sm', 'md', 'lg']}
                _hover={{ bg: 'my.300' }}
                leftIcon={<IconButton
                  icon={<FiGlobe />}
                  variant='ghost'
                  aria-label='Live'
                  fontSize='2xl'
                  color='blue.600'
                  _hover={{ bg: 'inherit' }}
                />}
                iconSpacing='0'
              >
                <Text marginRight='10px'>App</Text>
              </Button>
              <Button
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href={projectRepository}
                variant='solid'
                bg='my.500'
                color='my.200'
                fontSize={['sm', 'md', 'lg']}
                _hover={{ bg: 'my.600' }}
                leftIcon={<IconButton
                  icon={<FaGithub />}
                  variant='ghost'
                  aria-label='GitHub'
                  fontSize='2xl'
                  color='blackAlpha.700'
                  _hover={{ bg: 'inherit' }}
                />}
                iconSpacing='0'
              >
                <Text marginRight='10px'>Repo</Text>
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
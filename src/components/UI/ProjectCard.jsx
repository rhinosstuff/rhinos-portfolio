import { Image, Text, Card, CardBody, CardFooter, Stack, Heading, Button  } from '@chakra-ui/react';

export default function ProjectCard({ projectTitle, projectImage, projectLink, projectRepository }) {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      variant='outline'
      borderWidth={3}
      mb={6}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={projectImage}
        alt={projectTitle}
        borderRadius={18}
        p={3}
      />

      <Stack>
        <CardBody>
          <Heading size='lg'>{projectTitle}</Heading>

          <Text py='3'>
          This is a simple blog & comment project that requires login to make posts or comments. <br/> Feel free to give it a try by signing up.
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            as='a'
            target='_blank'
            rel='noopener noreferrer'
            href={projectLink} 
            variant='solid' 
            bg='my.200' 
            color='my.500'
            fontSize={['sm', 'md', 'lg']} 
            _hover={{ bg: 'my.300' }}
          >
            View Project
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
            ml='3'
          >
            GitHub Repositroy
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
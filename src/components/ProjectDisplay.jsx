import { Box } from '@chakra-ui/react';
import TechBlog from '../assets/images/Tech-Blog.png'
import ProjectCard from './UI/ProjectCard'

export default function ProjectCards() {
  return (
    <Box>
      <ProjectCard
        projectTitle='Tech Blog'
        projectImage={TechBlog}
        projectLink='https://tech-blog-6pus.onrender.com/'
        projectRepository='https://github.com/rhinosstuff/Tech-Blog'
      />
      <ProjectCard
        projectTitle='Tech Blog'
        projectImage={TechBlog}
        projectLink='https://tech-blog-6pus.onrender.com/'
        projectRepository='https://github.com/rhinosstuff/Tech-Blog'
      />
    </Box>
  );
}
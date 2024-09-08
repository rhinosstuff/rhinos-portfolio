import { Box } from "@chakra-ui/react";
import TechBlog from '../assets/images/Tech-Blog.png'
import Card from './UI/PortfolioCard'

export default function PortfolioCards() {
  return (
    <Box>
      <Card
        projectTitle="Tech Blog"
        projectImage={TechBlog}
        projectLink="https://tech-blog-6pus.onrender.com/" // open this in new tab
      />
      {/* Add more PortfolioCard components for additional projects */}
    </Box>
  );
}
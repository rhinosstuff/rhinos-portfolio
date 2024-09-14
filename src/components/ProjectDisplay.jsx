import { Box } from '@chakra-ui/react';
import ProjectCard from './UI/ProjectCard'
import StockNessMonster from '../assets/images/stock-ness-monster.png'
import TechBlog from '../assets/images/tech-blog.png'
import WeatherDashboard from '../assets/images/weather-dashboard.png'
import BookFinder from '../assets/images/book-finder.png'
import TaskBoard from '../assets/images/task-board.png'
import NoteTaker from '../assets/images/note-taker.png'

export default function ProjectCards() {
  return (
    <Box>
      <ProjectCard
        projectTitle='Stock-Ness-Monster'
        projectImage={StockNessMonster}
        projectDescription={
          <>
            Welcome to the Stock-ness Monster! Inventory so accurate you won't believe it exists! This is a robust internal company management application focused on conquering the chaos of order and inventory management, with team and client functionality. By using the Stock-ness Monster your company can seamlessly and efficiently keep track of its orders, products, customers, teams, and reports.
            <br /><br />
            Give it a try using these credentials.<br />
            Username: johndoe123<br />
            Password: 123johndoe
          </>
          }
        projectLink='https://stock-ness-monster-9y4p.onrender.com/login'
        projectRepository='https://github.com/rhinosstuff/stock-ness-monster'
      />
      <ProjectCard
        projectTitle='Tech Blog'
        projectImage={TechBlog}
        projectDescription={
        <>
          Welcome to The Tech Bolg! Post your own blogs or comment on other user blogs. Just please be kind and thoughful. This blog & comment project requires authentication to make posts or comments. Once you signup you can comment, post, edit or delete your bolgs.<br /><br />
          Give it a try by signing up.
        </>
        }
        projectLink='https://tech-blog-6pus.onrender.com/'
        projectRepository='https://github.com/rhinosstuff/Tech-Blog'
      />
      <ProjectCard
        projectTitle='Weather Dashboard'
        projectImage={WeatherDashboard}
        projectDescription={
        <>
          This is weather dashboard using an api to get the current weather and 5-day forcast based on your city of choice. It uses local storage to keep track of your searches.<br /><br />
          Give it a try.
        </>
        }
        projectLink='https://rhinosstuff.github.io/Weather-Dashboard/'
        projectRepository='https://github.com/rhinosstuff/Weather-Dashboard'
      />
      <ProjectCard
        projectTitle='Book Finder'
        projectImage={BookFinder}
        projectDescription={
        <>
          This app uses an api to find a book or author. You can click on the title of the search results to see if any movies exist based of the title. You can also use the feeling lucky button to get a random title based on genre.<br /><br />  
          Give it a try.
        </>
        }
        projectLink='https://rhinosstuff.github.io/Book-Finder/'
        projectRepository='https://github.com/rhinosstuff/Book-Finder'
      />
      <ProjectCard
        projectTitle='Task Board'
        projectImage={TaskBoard}
        projectDescription={
        <>
          This app is a simple Task Board that keeps track of your To Do's. It uses local storage to keep track of your tasks and progress. Colors of task will change based on proximity  to today's date.<br /><br />  
          Give it a try.
        </>
        }
        projectLink='https://rhinosstuff.github.io/Task-Board/'
        projectRepository='https://github.com/rhinosstuff/Task-Board'
      />
      <ProjectCard
        projectTitle='Note Taker'
        projectImage={NoteTaker}
        projectDescription={
        <>
          This app is a simple Note Taker that keeps track of your To Do's.<br /><br />  
          Give it a try.
        </>
        }
        projectLink='https://note-taker-e6ca.onrender.com/'
        projectRepository='https://github.com/rhinosstuff/Note-Taker'
      />
    </Box>
  );
}
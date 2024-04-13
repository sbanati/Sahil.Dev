import ProjectCard from "../components/ProjectCard";
import Jate from "../assets/Jate.png"
import RecipeBlog from "../assets/RecipeBlog.png"
import WeatherApp from "../assets/WeatherApp.png"
import SocialNetwork from "../assets/SocialNetwork.png"
import ECommerce from "../assets/ECommerce.png"
import EmployeeTracker from "../assets/EmployeeTracker.png"


const Portfolio = () => {
  // Array data for projects
  const projects = [
    {
      title: 'RecipePost',
      imageUrl: RecipeBlog,
      description: 'CMS-style platform on Heroku, incorporating (CRUD) operations for blog posts and comments, structured around the (MVC)for creating and managing persistent storage for aseamless user experience',
      githubUrl: 'https://github.com/topcowmoo/unbreakable-cream',
      deployedUrl: 'https://unbreakable-cream-a4b95d823c2c.herokuapp.com/',
      techStackUrl: 'https://skillicons.dev/icons?i=nodejs,mysql,sequelize,figma&theme=light'
    },
    {
      title: 'Jate',
      imageUrl: Jate,
      description: 'Create a browser-based text editor as a single-page application (SPA) meeting Progressive Web App (PWA) criteria. Implement data persistence using IndexedDB database with the idb package. Ensure offline functionality and deploy the full-stack application to Render using the Render Deployment Guide.',
      githubUrl: 'https://github.com/sbanati/DraftHub',
      deployedUrl: 'https://drafthub.onrender.com/',
      techStackUrl: 'https://skillicons.dev/icons?i=nodejs,express,webpack,babel&theme=light',
    },
    {
      title: 'WeatherApp',
      imageUrl: WeatherApp,
      description: 'Developing a browser-based weather dashboard featuring dynamically updated HTML and CSS for daily or weekly weather forecasts. Utilizes the openweather API to fetch weather data and localStorage for persistent storage',
      githubUrl: 'https://github.com/sbanati/Adventure-Forecast',
      deployedUrl: 'https://sbanati.github.io/Adventure-Forecast/',
      techStackUrl: 'https://skillicons.dev/icons?i=js,html,css&theme=light',
    },
    {
      title: 'Social NetworK API',
      imageUrl: SocialNetwork,
      description: 'Developed an api for a social network application,where users can share posts, react to friends posts and create a friends list.',
      githubUrl: 'https://github.com/sbanati/amazing-lemon',
      deployedUrl: 'https://www.youtube.com/watch?v=5NpbM1jlwgI&ab_channel=jsmbanati',
      techStackUrl: 'https://skillicons.dev/icons?i=nodejs,express,mongodb,npm&theme=light',
    },
    {
      title: 'E-Commerce API',
      imageUrl: ECommerce,
      description: 'Developed an E-Commerce backend application configured with a working Express.js API which uses Sequelize to interact with a MySQL database.',
      githubUrl: 'https://github.com/sbanati/e-commerce-backend',
      deployedUrl: 'https://www.youtube.com/watch?v=3Qst3kEQlFs&ab_channel=jsmbanati',
      techStackUrl: 'https://skillicons.dev/icons?i=nodejs,express,mysql,npm&theme=light',
    },
    {
      title: 'EmployeeTracker',
      imageUrl: EmployeeTracker,
      description:'Developed a command-line interface(CLI) application, leveraging Node.js, Inquirer.js, and MySQL2, to facilitate dynamic CRUD operations on an SQL Human Resources employee database tracker.',
      githubUrl: 'https://github.com/sbanati/TeamFlow',
      deployedUrl: 'https://www.youtube.com/watch?v=Ft5N33LkwrQ&ab_channel=jsmbanati',
      techStackUrl: 'https://skillicons.dev/icons?i=nodejs,mysql,npm&theme=light',
    },
   
    
  ];

  return (
    <div className="bg-neutral-100 pt-8 pb-12">
      <div className="max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            githubUrl={project.githubUrl}
            deployedUrl={project.deployedUrl}
            index={index} 
            techStackUrl={project.techStackUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;



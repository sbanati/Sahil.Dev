import ProjectCard from "../components/ProjectCard";
import Jate from "../assets/Jate.png"


const Portfolio = () => {
  // Array data for projects
  const projects = [
    {
      title: 'Project 1',
      imageUrl: '',
      description: 'Description of Project 1',
      githubUrl: 'https://github.com/yourusername/project1',
      deployedUrl: 'https://deployment-url.com/project1',
    },
    {
      title: 'Jate',
      imageUrl: Jate,
      description: 'PWA Project',
      githubUrl: 'https://github.com/sbanati/DraftHub',
      deployedUrl: 'https://drafthub.onrender.com/',
    },
    {
      title: 'Project 2',
      imageUrl: '',
      description: 'Description of Project 2',
      githubUrl: 'https://github.com/yourusername/project2',
      deployedUrl: 'https://deployment-url.com/project2',
    },
    {
      title: 'Project 2',
      imageUrl: '',
      description: 'Description of Project 2',
      githubUrl: 'https://github.com/yourusername/project2',
      deployedUrl: 'https://deployment-url.com/project2',
    },
    {
      title: 'Project 2',
      imageUrl: '',
      description: 'Description of Project 2',
      githubUrl: 'https://github.com/yourusername/project2',
      deployedUrl: 'https://deployment-url.com/project2',
    },
    {
      title: 'Project 2',
      imageUrl: '',
      description: 'Description of Project 2',
      githubUrl: 'https://github.com/yourusername/project2',
      deployedUrl: 'https://deployment-url.com/project2',
    },
   
    
  ];

  return (
    <div className="bg-neutral-100 pt-8 pb-8">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

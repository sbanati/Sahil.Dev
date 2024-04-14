import PropTypes from 'prop-types';
import { Github, Share } from 'lucide-react'; // Importing Lucide Icons

const Card = ({ title, description, imageUrl, githubUrl, deployedUrl, techStackUrl, index }) => {
  // Apply custom CSS class to alternate positioning
  const cardClass = index % 2 === 0 ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`bg-white max-w-5xl shadow-lg mx-auto border rounded-md mb-20 p-8 flex ${cardClass} `}>
      <div className="flex flex-col justify-center flex-1">
        <div className="relative mb-4">
          <h2 className="text-xl font-bold text-center absolute w-full top-0 -mt-5">{title}</h2>
        </div>
        <p className="text-black mb-4 mt-4 text-center">{description}</p>
        <div className="flex justify-center mb-4">
          <a href={githubUrl} alt='github icon' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
            <Github size={24} title= 'Clickable Github icon'/>
          </a>
          <a href={deployedUrl} alt ='View deployed project' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <Share size={24} title= 'Clickable Live icon'/>
          </a>
        </div>
        {/* Hide project image on medium screens and lower */}
        <img src={techStackUrl} alt="Tech Stack" className=" w-52  mx-auto mb-2 mt-10 "  /> 
      </div>
      {/* Display project image on screens larger than medium */}
      <div className="hidden md:block w-72 h-auto ml-8 rounded-lg  items-center justify-center"> 
        <img src={imageUrl} alt={title} className="w-full h-full rounded-lg" /> 
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  techStackUrl: PropTypes.string.isRequired, 
  index: PropTypes.number.isRequired, 
};

export default Card;

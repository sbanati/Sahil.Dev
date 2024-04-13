import PropTypes from 'prop-types';
import { Github, Share } from 'lucide-react'; // Importing Lucide Icons

const Card = ({ title, description, imageUrl, githubUrl, deployedUrl, techStackUrl, index }) => {
  // Apply custom CSS class to alternate positioning
  const cardClass = index % 2 === 0 ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={` bg-white max-w-5xl shadow-lg mx-auto border rounded-md mb-20 p-8 flex ${cardClass}`}>
      <div className="flex flex-col justify-center flex-1"> {/* Center the content vertically */}
        <div className="relative mb-4">
          <h2 className="text-xl font-bold text-center absolute w-full top-0 -mt-5">{title}</h2> {/* Position title at the top with increased top margin */}
        </div>
        <p className="text-black mb-4 mt-4 text-center">{description}</p> {/* Center the description */}
        <div className="flex justify-center mb-4"> {/* Center the icons */}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
            <Github size={24} />
          </a>
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <Share size={24} />
          </a>
        </div>
        {/* Add tech stack image with margin to move it down */}
        <img src={techStackUrl} alt="Tech Stack" className="w-34 h-auto mx-auto mb-2 mt-10"  /> {/* Use a smaller width for the tech stack image */}
      </div>
      <div className="w-72 h-auto ml-8 rounded-lg flex items-center justify-center"> {/* Adjusted width of the image */}
        <img src={imageUrl} alt={title} className="w-full h-full rounded-lg" /> {/* Adjusted height of the image */}
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
  techStackUrl: PropTypes.string.isRequired, // URL for tech stack image
  index: PropTypes.number.isRequired, // Added prop for index of the card
};

export default Card;


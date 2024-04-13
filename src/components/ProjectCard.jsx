import PropTypes from 'prop-types';
import { Github, Share } from 'lucide-react'; // Importing Lucide Icons

const Card = ({ title, description, imageUrl, githubUrl, deployedUrl }) => {
  return (
    <div className="max-w-5xl mx-auto border border-black rounded-md mb-20 p-8 flex">
      <div className="w-48 h-auto mr-8 rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full rounded-lg" />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-800 mb-4">{description}</p>
        <div className="flex justify-between">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <Github size={24} />
          </a>
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <Share size={24} />
          </a>
        </div>
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
};

export default Card;

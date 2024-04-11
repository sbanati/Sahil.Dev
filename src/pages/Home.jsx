import screenshot1 from '../assets/screenshot1.jpg';

const Home = () => {
  return (
    <div className="hero-section bg-cover bg-neutral-100 py-11 flex flex-col items-center justify-center min-h-screen mt-[-50px] sm:flex-row"> {/* Added flex-col and sm:flex-row classes */}
      <div className="max-w-4xl flex flex-col items-center justify-center mb-20 sm:flex-row"> {/* Added flex-col and sm:flex-row classes */}
        <div className="flex flex-col items-center justify-center mb-8 mr-0 sm:mr-12"> {/* Adjusted margin to provide more space */}
          <h2 className="text-6xl mb-8 text-black text-center">Front-End Web Developer</h2> {/* Increased text size and centered text */}
          <p className="text-xl text-black text-center">Hi! I am Sahil Banati, a new and passionate Front-end Developer from Toronto, Canada.🍁</p> {/* Increased text size and centered text */}
          <img src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb" alt="My Skills" className='pt-5 w-96 mx-auto sm:mx-0' /> {/* Centered the image and adjusted margin for mobile */}
        </div>
        <div className="ml-auto mt-12 hidden sm:block"> {/* Adjusted margin to provide more space */}
          <img src={screenshot1} alt="Straw-Hat Pirate" className="h-50 rounded-full mb-12" /> {/* Increased image height */}
        </div>
      </div>
    </div>
  );
};

export default Home;

import screenshot1 from '../assets/screenshot1.jpg';

const Home = () => {
  return (
    <div className="hero-section bg-cover bg-neutral-100 py-11 flex flex-col items-center justify-center min-h-screen mt-[-50px] sm:flex-row"> 
      <div className="max-w-4xl flex flex-col items-center justify-center mb-20 sm:flex-row"> 
        <div className="flex flex-col items-center justify-center mb-8 mr-0 sm:mr-12"> 
          <h2 className="text-6xl mb-8 text-black text-center">Full-Stack Web Developer</h2> 
          <p className="text-xl text-black text-center">Hi! I am Sahil Banati, a new and passionate Front-end Developer from Toronto, Canada.🍁</p> 
          <img src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb" alt="My Skills" className='pt-5 w-96 mx-auto sm:mx-0' /> 
        </div>
        <div className="ml-auto mt-12 hidden sm:block"> 
          <img src={screenshot1} alt="Straw-Hat Pirate" className="h-50 rounded-full mb-12" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;

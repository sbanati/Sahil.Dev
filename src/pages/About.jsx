import screenshot2 from '../assets/screenshot2.png';

const About = () => {
  return (
    <section id="about" className="bg-neutral-200 py-20 pb-0 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="w-full md:w-3/4 flex justify-center">
            <img
              src={screenshot2}
              alt="cartoon of boy coding on laptop"
              className="w-full h-auto rounded-lg hidden md:block"
            />
          </div>
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2 px-8 py-6 flex items-center justify-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4 text-center md:text-left">About Me</h3>
            <h4 className="text-2xl text-black mb-6 text-center md:text-left">
              A passionate, curious, and dedicated developer from Toronto, Canada.
            </h4>
            <p className="text-base text-gray-700 leading-relaxed text-center md:text-left">
              As a new developer, I am focused on building strong fundamentals while learning new languages and developing skills for successful programming. I am a team player who loves to communicate and collaborate. What I lack in experience, I make up for with a strong will to learn while being driven by passion and curiosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;

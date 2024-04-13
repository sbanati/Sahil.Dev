

const Resume = () => {
  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=14HMUWlrQyCJsmDsxAmQ10e0GKB6SLzZ9';

  const handleDownload = () => {
    window.location.href = resumeDownloadUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[-80px] bg-neutral-100">
      <div className="align-left">
        <h1 className="text-xl text-blue-600">Front-End Proficiency</h1>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
          
        <h1 className="text-xl text-blue-600">Back-End Proficiency</h1>
        <ul className="list-disc list-inside">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB, Mongoose</li>
          <li>MySQL, Seqeulize</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <button 
        className="bg-red-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-8 "
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;

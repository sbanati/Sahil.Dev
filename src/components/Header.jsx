import Navbar from './Navbar';



function Header() {
  return (
    <header className="sticky top-0 bg-white text-black font-semibold z-[20] flex justify-between items-center mx-auto p-7 text-lg shadow-md w-full  ">
      <h1 className='text-xl'>Sahil.dev</h1>
      <Navbar /> 
    </header>
    
  );
}

export default Header;



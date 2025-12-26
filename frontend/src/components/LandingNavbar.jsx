import { Link } from "react-router-dom";

function LandingNavbar() {
<<<<<<< HEAD
  return (
    <div className="bg-[#F5F6FB] w-full h-[4.5rem] flex items-center pl-17">
      <Link to="/">
        <img src="../../logo.png" alt="logo" className="w-[10rem]" />
      </Link>
    </div>
  );
=======
  return <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full h-[5rem] flex items-center px-8 border-b border-gray-100 shadow-sm">
    <img src="../../logo.png" alt="logo" className="w-[9rem] cursor-pointer hover:opacity-90 transition-opacity" />
  </div>;
>>>>>>> 5ccd41d7f519b73d8bffc2145373cd7ad713a4d0
}

export default LandingNavbar;

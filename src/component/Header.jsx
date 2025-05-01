import React from "react";
import logo from "../assets/logo.png";
import { useNavigate,Link } from "react-router";

function Header() {
  const navigate = useNavigate();
  const clickhandler = (e) => {
    e.preventDefault()
    navigate("/login")
  }
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white bg-transparent">
      <div className="flex justify-between items-center px-20 py-8">
       <Link to="/"><img src={logo} alt="Logo" className="h-[40px]"  /></Link> 
        <div className="flex items-center gap-4">
          <select className="bg-transparent text-white border border-red-500 px-2 py-1 rounded outline-none">
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
          </select>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded" onClick={clickhandler}>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

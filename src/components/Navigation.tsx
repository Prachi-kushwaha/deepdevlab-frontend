import Link from "next/link";
import React from "react";
import Profile from "./Profile";
import Logo from "./Logo";

const Navbar:React.FC = () => {
  return (
    
      <div className="grid grid-cols-12 w-full">
        <Logo />
        <div className="flex justify-center text-center gap-15 mx-20 col-span-8 ">
          <Link href="">
            {" "}
            <h1 className="nav-text-color font-bold">Home</h1>
          </Link>
          <Link href="">
            <h1 className="nav-text-color font-bold">Blogs</h1>
          </Link>
          <Link href="">
            <h1 className="nav-text-color font-bold">Projects</h1>
          </Link>
          <Link href="">
            <h1 className="nav-text-color font-bold">About</h1>
          </Link>
        </div>
         
        <Profile />
      </div>
   
  );
};

export default Navbar;

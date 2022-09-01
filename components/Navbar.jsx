import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} onClick={handleNav} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navLogo.png"
                width="87"
                height="35"
                alt="/"
              />
              <div
                className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer"
                onClick={handleNav}
              >
                {" "}
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-10">
              <p className="w-[85%] md:w-[90%]  py-10">
                Lets build Our Portofolio App in Next and tailwind CSS
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-4">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[90%] pt-10">
                  <div className="rounded-full p-3 shadow-lg shadow-gray-300 cursor-pointer hover:scale-105 ">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full p-3 shadow-lg shadow-gray-300 cursor-pointer hover:scale-105 ">
                    <FaGithub />
                  </div>
                  <div className="rounded-full p-3 shadow-lg shadow-gray-300 cursor-pointer hover:scale-105 ">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full p-3 shadow-lg shadow-gray-300 cursor-pointer hover:scale-105 ">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

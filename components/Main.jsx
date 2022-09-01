import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {" "}
            Lets build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#5651e5]">Muhammad</span>
          </h1>
          <h1 className="py-4 text-gray-700"> A React Next EnGinEER</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full p-6 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full p-6 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110">
              <FaGithub />
            </div>
            <div className="rounded-full p-6 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110">
              <AiOutlineMail />
            </div>
            <div className="rounded-full p-6 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;


import React from 'react';
import './Slider.css';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { IoLogoDocker, IoLogoReact } from 'react-icons/io5';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';

const icons = [
  { icon: <FaHtml5 />, bg: '#DE4B25', size: 'text-5xl' },
  { icon: <FaCss3Alt />, bg: '#006AB2', size: 'text-5xl' },
  { icon: <RiJavascriptFill />, bg: '#EAB308', size: 'text-5xl' },
  { icon: <IoLogoReact />, bg: '#52D7F1', size: 'text-5xl' },
  { icon: <DiNodejs />, bg: '#76C50A', size: 'text-7xl' },
  { icon: <SiMongodb />, bg: '#166534', size: 'text-7xl' },
  { icon: <IoLogoDocker />, bg: '#019AFA', size: 'text-7xl' },
];

const Slider = () => {
  return (
    <div className="main w-full min-h-screen bg-[#2e0043] py-10">

      <h1 className="text-2xl w-[150px] p-2 mx-auto rounded-bl-4xl rounded-tr-4xl text-white block text-center share-tech bg-gradient-to-r from-[#15001F] shadow-[#2e0043] shadow-xl via-[#2e0043] to-black">
        My Skills
      </h1>

      {/* DESKTOP: bounce grid - same as before */}
      <div className="hidden md:flex justify-center items-center gap-20 mt-60">
        {icons.map((item, i) => (
          <div
            key={i}
            className={`flex justify-center items-center w-[100px] h-[100px] rounded-full text-white ${item.size} animate-bounce-${i + 1}`}
            style={{ backgroundColor: item.bg }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* MOBILE: 2 per row grid */}
      <div className="grid md:hidden grid-cols-2 gap-6 mt-10 px-8">
        {icons.map((item, i) => (
          <div
            key={i}
            className={`flex justify-center items-center w-[100px] h-[100px] rounded-full text-white ${item.size} mx-auto`}
            style={{ backgroundColor: item.bg }}
          >
            {item.icon}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Slider;


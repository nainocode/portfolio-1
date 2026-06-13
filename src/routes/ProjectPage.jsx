import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#15001F] text-white share-tech">

      {/* BACK BUTTON */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-400 hover:text-white border border-purple-500/30 hover:border-purple-500 px-4 py-2 rounded-full text-sm tracking-widest transition-all duration-300 hover:bg-purple-500/10"
        >
          ← Back
        </button>
      </div>

      {/* HERO */}
      <div className="text-center px-6 pt-10 pb-10">
        <p className="text-xs tracking-[4px] text-purple-400 uppercase mb-4">// about me</p>
        <div className="w-28 h-28 rounded-full border border-purple-500/40 bg-purple-900/20 flex items-center justify-center text-5xl mx-auto mb-8">
          👨‍💻
        </div>
        <h1 className="text-5xl md:text-7xl mb-3">
          <span className="text-purple-400">&lt;</span>
          <span className="text-white"> Husnain Raza </span>
          <span className="text-purple-400">/&gt;</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-300 tracking-[3px] mb-6">MERN Stack Developer</p>
        <p className="max-w-xl mx-auto text-purple-200/70 text-sm leading-relaxed font-sans">
          Full Stack software developer with expertise in front-end and back-end development.
          Currently expanding skills into React Native. Passionate about building fast, clean,
          and scalable web applications.
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-10" />
      </div>

      {/* STATS */}
      <div className="px-6 md:px-20 mt-10">
        <p className="text-xs tracking-[4px] text-purple-400 mb-6 flex items-center gap-3">
          // stats <span className="flex-1 h-px bg-purple-500/20" />
        </p>
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { num: '10+', label: 'PROJECTS' },
            { num: '1+', label: 'YEARS EXP' },
            { num: '4★', label: 'STACK' },
          ].map((s, i) => (
            <div key={i} className="bg-purple-900/10 border border-purple-500/20 rounded-2xl py-6 text-center">
              <div className="text-3xl md:text-4xl mb-1">{s.num}</div>
              <div className="text-[10px] tracking-[2px] text-purple-300">{s.label}</div>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <p className="text-xs tracking-[4px] text-purple-400 mb-6 flex items-center gap-3">
          // skills <span className="flex-1 h-px bg-purple-500/20" />
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {[
            { icon: '🍃', name: 'MongoDB' },
            { icon: '⚡', name: 'Express.js' },
            { icon: '⚛️', name: 'React.js' },
            { icon: '🟢', name: 'Node.js' },
            { icon: '🎨', name: 'Tailwind CSS' },
            { icon: '🐳', name: 'Docker' },
            { icon: '✨', name: 'GSAP & Framer' },
            { icon: '🔷', name: 'HTML5 / CSS3' },
          ].map((s, i) => (
            <div key={i} className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4 text-center hover:bg-purple-900/30 hover:border-purple-500/60 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-xs text-purple-300 tracking-wider">{s.name}</div>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <p className="text-xs tracking-[4px] text-purple-400 mb-6 flex items-center gap-3">
          // experience <span className="flex-1 h-px bg-purple-500/20" />
        </p>
        <div className="mb-14 bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
            <div>
              <p className="text-white text-base">Frontend Developer</p>
              <p className="text-purple-400 text-sm tracking-widest">CODEALPHA</p>
            </div>
            <span className="text-xs text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full">1 Month Internship</span>
          </div>
          <ul className="font-sans text-sm text-purple-200/70 leading-relaxed list-none flex flex-col gap-2">
            <li>→ Developed responsive web applications using React.js and Tailwind CSS</li>
            <li>→ Implemented smooth animations using GSAP and Framer Motion</li>
            <li>→ Built RESTful APIs with Node.js and Express.js</li>
            <li>→ Optimized performance and ensured cross-browser compatibility</li>
          </ul>
        </div>

        {/* JOURNEY */}
        <p className="text-xs tracking-[4px] text-purple-400 mb-6 flex items-center gap-3">
          // journey <span className="flex-1 h-px bg-purple-500/20" />
        </p>
        <div className="flex flex-col gap-0 mb-14">
          {[
            { year: '2023', title: 'Started Coding', desc: 'Started with HTML, CSS, and JavaScript. Fell in love with web development.' },
            { year: '2024', title: 'MERN Stack & Internship', desc: 'Learned React, Node.js, MongoDB. Completed internship at CodeAlpha.' },
            { year: '2025', title: 'Portfolio Launch', desc: 'Built NainoCode brand, deployed real-world projects, and started learning React Native.' },
          ].map((j, i) => (
            <div key={i} className="grid grid-cols-[70px_1fr] gap-5 pb-8 relative">
              <div className="absolute left-[39px] top-6 bottom-0 w-px bg-purple-500/20" style={{ display: i === 2 ? 'none' : 'block' }} />
              <p className="text-xs text-purple-400 tracking-widest text-right pt-1">{j.year}</p>
              <div className="pl-5 relative">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#9b59b6]" />
                <p className="text-base text-white mb-1">{j.title}</p>
                <p className="text-sm text-purple-300/80 font-sans leading-relaxed">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 flex-wrap justify-center pb-20 px-6">
        <a
          href="/CV.pdf"
          download="Husnain_Raza_CV.pdf"
          className="px-8 py-3 rounded-full bg-purple-600 hover:bg-transparent hover:text-purple-400 border-2 border-purple-600 transition-all duration-300 tracking-widest text-sm"
        >
          Hire Me ↓
        </a>
        <Link to="/project" className="px-8 py-3 rounded-full border-2 border-purple-500/40 text-purple-400 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 tracking-widest text-sm">
          Projects →
        </Link>
      </div>

    </div>
  )
}

export default About
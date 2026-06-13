
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="text-white p-5">
//       <div className="max-w-screen-lg mx-auto gap-3 flex justify-between items-center">
//         <h1 className="text-3xl share-tech"> &lt; Naino / Code &gt; </h1>
//         <nav className="hidden md:flex space-x-8 share-tech">
//           <Link to="/project" className="hover:text-gray-400">About</Link>
//         </nav>
//         <button
//           className="md:hidden flex items-center"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu - transparent + blur */}
//       {isOpen && (
//         <nav className="md:hidden mt-2 rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
//           <Link
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className="block px-6 py-3 text-white hover:bg-white/20 transition-all duration-200 share-tech border-b border-white/10"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className="block px-6 py-3 text-white hover:bg-white/20 transition-all duration-200 share-tech border-b border-white/10"
//           >
//             About
//           </Link>
//           <Link
//             to="/project"
//             onClick={() => setIsOpen(false)}
//             className="block px-6 py-3 text-white hover:bg-white/20 transition-all duration-200 share-tech border-b border-white/10"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="block px-6 py-3 text-white hover:bg-white/20 transition-all duration-200 share-tech"
//           >
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-5">
      <div className="max-w-screen-lg mx-auto gap-3 flex justify-between items-center">

        <h1 className="text-3xl share-tech"> &lt; Naino / Code &gt; </h1>

        {/* DESKTOP - About link + profile */}
        <nav className="hidden md:flex items-center gap-4 share-tech">
          <Link to="/project">
            <div className="w-10 h-10 rounded-full border border-purple-500/40 bg-purple-900/20 flex items-center justify-center text-lg">
              👨‍💻
            </div>
          </Link>
        </nav>

        {/* MOBILE - hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden mt-2 rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
          <Link to="/project" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-white/20 transition-all duration-200 share-tech">
            <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-900/20 flex items-center justify-center text-sm">
              👨‍💻
            </div>
            About
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
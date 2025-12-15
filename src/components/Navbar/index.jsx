// // src/components/Navbar/index.jsx
// import { useState, useEffect } from "react";
// import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaXTwitter, FaAngleDown } from "react-icons/fa6";
// import { scroller } from "react-scroll";
// import { Drawer } from "antd";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import Images from "../../assets/Images";
// import { useNavigate } from 'react-router-dom'


// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate()

//   const variants = {
//     open: { opacity: 1, height: "auto" },
//     collapsed: { opacity: 0, height: 0 },
//   };

//   const arrowVariants = {
//     opened: { rotate: 180 },
//     closed: { rotate: 0 },
//   };

//   const handleMouseEnter = (menuName) => {
//     setOpenDropdown(menuName);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null);
//   };

//   const menuItems = {
//     "Medical AI Solution": [],
//     "Medical Data Value": [],
//     "Company Introduction": [],
//     "About Save the Life": [],
//     "White Paper": [],
//     "Medical Images": [],
//   };

//   const showMenu = () => {
//     setIsMenuOpen(true);
//   };

//   const onClose = () => {
//     setIsMenuOpen(false);
//   };

//   const menuTitle = () => (
//     <div className="flex flex-row justify-between items-center max-h-16 py-1">
//       <a href="/">
//         <img
//           className="h-5 object-contain"
//           src={Images.LogoBlue}
//           alt="Logo"
//           onClick={onClose}
//         />
//       </a>
//       <button onClick={onClose} className="focus:outline-none">
//         <svg
//           className="h-6 w-6"
//           fill="none"
//           stroke="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           ></path>
//         </svg>
//       </button>
//     </div>
//   );

//   const socialLinks = (
//     <div className="flex flex-row justify-around gap-6 my-4 text-xl">
//       <a
//         href="https://twitter.com/savethelife_SL"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaXTwitter />
//       </a>
//       <a
//         href="https://t.me/slfoundation"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaTelegramPlane />
//       </a>
//       <a
//         href="https://www.linkedin.com/company/slfoundation"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaLinkedinIn />
//       </a>
//       <a
//         href="https://github.com/save-the-life"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaGithub />
//       </a>
//     </div>
//   );

//   const location = useLocation();

//   function handleNavigation(item) {
//     const itemId = item.replace(/\s+/g, "");
//     const element = document.getElementById(itemId);

//     if (item === "White Paper") {
//       window.location.href = `https://save-the-life.gitbook.io/save-the-life`;
//       return;
//     }

//     if (item === "IR Deck") {
//       window.location.href =
//         "https://drive.google.com/file/d/1CpGhbPMOkhuDKDZVYjtoIpfukG5qCCCy/view";
//       return;
//     }

//     if (item === "Medical Images") {
//       navigate("/MedicalImages")
//       return;
//     }

//     if (element) {
//       scroller.scrollTo(itemId, {
//         duration: 800,
//         delay: 0,
//         smooth: "easeInOutQuart",
//       });
//     } else {
//       window.location.href = `/#${itemId}`;
//     }
//   }

//   function handleNavigationMobile(itemId) {
//     const element = document.getElementById(itemId);
//     if (element) {
//       onClose();
//       scroller.scrollTo(itemId, {
//         duration: 800,
//         delay: 0,
//         smooth: "easeInOutQuart",
//       });
//     } else {
//       window.location.href = `/#${itemId}`;
//     }
//   }

//   useEffect(() => {
//     const hash = window.location.hash.substring(1);
//     if (hash) {
//       setTimeout(() => {
//         const element = document.getElementById(hash);
//         if (element) {
//           scroller.scrollTo(hash, {
//             duration: 800,
//             delay: 0,
//             smooth: "easeInOutQuart",
//           });
//         }
//       }, 500); // Delay to allow the page to render the element
//     }
//   }, [location]);

//   return (
//     <nav className="bg-[#FFF9F7] text-[#171717] fixed w-full h-16 flex items-center z-20">
//       <div className=" mx-auto px-4 xl:px-20 w-full ">
//         <div className="flex justify-between items-center py-2">
//           <div className="flex items-center space-x-12">
//             <img
//               className="h-5 object-contain cursor-pointer"
//               src={Images.LogoBlue}
//               alt="Logo"
//               onClick={() => {
//                 const element = document.getElementById("home");
//                 if (element) {
//                   scroller.scrollTo("home", {
//                     duration: 800,
//                     delay: 0,
//                     smooth: "easeInOutQuart",
//                   });
//                 } else {
//                   window.location.href = `/`;
//                 }
//               }}
//             />
//             <div className="hidden xl:flex 2xl:space-x-4 md:space-x-2 cursor-pointer md:text-sm 2xl:text-base">
//               {Object.keys(menuItems).map((menu) => (
//                 <div
//                   key={menu}
//                   className="relative text-[#171717]"
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div
//                     className="flex items-center"
//                     onMouseEnter={() => handleMouseEnter(menu)}
//                     onClick={() => handleNavigation(menu)}
//                   >
//                     {menu}
//                     {/* Show hidden arrow for menus with sub-items to maintain height consistency */}
//                     <motion.svg
//                       className={`ml-2 w-6 h-6`}
//                       fill="none"
//                       stroke="currentColor"
//                       style={{
//                         visibility:
//                           menuItems[menu].length > 0 ? "visible" : "hidden",
//                       }}
//                       animate={openDropdown === menu ? "opened" : "closed"}
//                       variants={arrowVariants}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </motion.svg>
//                   </div>
//                   <AnimatePresence>
//                     {openDropdown === menu && menuItems[menu].length > 0 && (
//                       <motion.ul
//                         initial="collapsed"
//                         animate="open"
//                         exit="collapsed"
//                         variants={variants}
//                         transition={{ duration: 0.5 }}
//                         className="absolute left-0 bg-white shadow-lg mt-4 rounded-lg w-60 text-base "
//                         onMouseEnter={() => handleMouseEnter(menu)}
//                       >
//                         {menuItems[menu].map((item) => (
//                           <li
//                             key={item}
//                             onClick={() => handleNavigation(item)}
//                             className="px-4 py-3 cursor-pointer text-neutral-800 hover:bg-gray-100 hover:rounded-lg"
//                           >
//                             {item}
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="hidden xl:flex items-center space-x-4">
//             {socialLinks}
//           </div>
//           <div className="xl:hidden">
//             <button
//               onClick={showMenu}
//               className="text-[#171717] focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <Drawer
//           title={menuTitle()}
//           onClose={onClose}
//           closeIcon={null}
//           open={isMenuOpen}
//           placement={"left"}
//           width={"100%"}
//         >
//           {/**드로어 모바일 영역 */}
//           <div className="flex flex-col text-base font-semibold gap-4 text-neutral-800">
//             <p
//               onClick={() => {
//                 handleNavigationMobile("MedicalAISolution");
//               }}
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               Medical AI Solution
//             </p>
//             <p
//               onClick={() => {
//                 handleNavigationMobile("MedicalDataValue");
//               }}
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               Medical Data Value
//             </p>
//             <p
//               onClick={() => {
//                 handleNavigationMobile("CompanyIntroduction");
//               }}
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               Company Introduction
//             </p>
//             <p
//               onClick={() => {
//                 handleNavigationMobile("AboutSavetheLife");
//               }}
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               About Save the Life
//             </p>
//             <a
//               target="_blank"
//                 href="https://save-the-life.gitbook.io/save-the-life"
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               White paper
//             </a>
//             <a
//                 href="/MedicalImages"
//               className="h-10 cursor-pointer hover:text-blue-400 flex items-center"
//             >
//               Medical Images
//             </a>
//             {/* <div className="flex flex-row h-12 items-center gap-2">
//               <p>White paper</p> <FaAngleDown />
//             </div>
//             <div className="flex flex-col gap-6 font-normal pl-4  ">
//               <a
//                 target="_blank"
//                 href="https://save-the-life.gitbook.io/save-the-life"
//                 className=" flex flex-row items-center"
//               >
//                 White paper
//               </a>
//               <a
//                 target="_blank"
//                 href="https://drive.google.com/file/d/1CpGhbPMOkhuDKDZVYjtoIpfukG5qCCCy/view"
//               >
//                 IR Deck
//               </a>
//             </div> */}

//             <div>
//               <div className="flex flex-row items-center gap-2">
//                 <p>Community</p> <FaAngleDown />
//               </div>
//               <div className="flex flex-col gap-6 font-normal pl-4 mt-6 text-md ">
//                 <div className=" flex flex-row items-center gap-2">
//                   <div className="text-black">
//                     <FaXTwitter />
//                   </div>{" "}
//                   <a
//                     href="https://twitter.com/savethelife_SL"
//                     target=" _blank"
//                   >
//                     Twitter
//                   </a>
//                 </div>
//                 <div className=" flex flex-row items-center gap-2">
//                   <div className="text-blue-400">
//                     <FaTelegramPlane />{" "}
//                   </div>{" "}
//                   <a href="https://t.me/slfoundation" target=" _blank">
//                     Telegram
//                   </a>
//                 </div>
//                 <div className=" flex flex-row items-center gap-2">
//                   <div className="text-blue-700">
//                     <FaLinkedinIn />{" "}
//                   </div>{" "}
//                   <a
//                     href="https://www.linkedin.com/company/slfoundation"
//                     target=" _blank"
//                   >
//                     Linkedin
//                   </a>
//                 </div>
//                 <div className=" flex flex-row items-center gap-2">
//                   <div className="text-gray-700">
//                     <FaGithub />
//                   </div>{" "}
//                   <a href="https://github.com/save-the-life" target=" _blank">
//                     Github
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Drawer>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar/Navbar.jsx - Light Theme Version
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Platform", href: "/#medical-ai" },
    { name: "Company", href: "/#company" },
    { name: "Partners", href: "/#partners" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Medical Images", href: "/MedicalImages" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/savethelife_SL", Icon: FaTwitter },
    { href: "https://t.me/slfoundation", Icon: FaTelegram },
    { href: "https://www.linkedin.com/company/slfoundation", Icon: FaLinkedin },
    { href: "https://github.com/save-the-life", Icon: FaGithub },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-gray-900 font-bold text-lg hidden sm:block">
              Save The Life
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Icon className="text-lg" />
              </a>
            ))}
            <a
              href="https://save-the-life.gitbook.io/save-the-life"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-colors"
            >
              Whitepaper
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              {socialLinks.map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="https://save-the-life.gitbook.io/save-the-life"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
            >
              Whitepaper
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
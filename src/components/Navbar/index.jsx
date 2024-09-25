// src/components/Navbar/index.jsx
import { useState, useEffect } from "react";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaAngleDown } from "react-icons/fa6";
import { animateScroll } from "react-scroll";
import { Drawer } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Images from "../../assets/Images";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  const arrowVariants = {
    opened: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const handleMouseEnter = (menuName) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const menuItems = {
    "SL Protocol": [
      "User Solution",
      "Blockchain",
      "Token Economy",
      // "DeFi User Case",
      "Data Buyer Case",
    ],
    Technology: ["Certificate & Patent", "Medical AI Solution"],
    "White Paper": ["White Paper", "IR Deck"],
  };

  const showMenu = () => {
    setIsMenuOpen(true);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  const menuTitle = () => (
    <div className="flex flex-row justify-between items-center max-h-16 py-1">
      <a href="/">
        <img
          className="h-6 object-contain"
          src={Images.DigirayLogo}
          alt="Logo"
          onClick={onClose}
        />
      </a>
      <button onClick={onClose} className="focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );

  const socialLinks = (
    <div className="flex flex-row justify-around gap-6 my-4 text-xl">
      <a
        href="https://twitter.com/savethelife_SL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://t.me/slfoundation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://www.linkedin.com/company/slfoundation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/safethelife"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );

  function handleNavigation(item) {
    const itemId = item.replace(/\s+/g, "");
    const element = document.getElementById(itemId);

    if (item === "White Paper") {
      window.location.href = `https://save-the-life.gitbook.io/save-the-life`;
      return;
    }

    if (item === "IR Deck") {
      window.location.href =
        "https://drive.google.com/file/d/1CpGhbPMOkhuDKDZVYjtoIpfukG5qCCCy/view";
      return;
    }

    if (element) {
      animateScroll.scrollTo(element.offsetTop); // 요소가 있으면 스크롤
    } else {
      window.location.href = `/${itemId}#${itemId}`;
    }
  }

  function handleNavigationMobile(itemId) {
    const element = document.getElementById(itemId);

    if (element) {
      onClose();
      animateScroll.scrollTo(element.offsetTop); // 요소가 있으면 스크롤
    } else {
      window.location.href = `/${itemId}#${itemId}`;
    }
  }

  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          animateScroll.scrollTo(element.offsetTop);
        }
      }, 500); // 0.5초 지연 후 스크롤 시도
    }
  }, [location]);
  return (
      <nav className="bg-[#FFF9F7] text-[#171717] fixed w-full h-16 flex items-center">
        <div className=" mx-auto px-4 xl:px-20 w-full ">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-24">
              <img
                className="h-6 object-contain cursor-pointer"
                src={Images.DigirayLogo}
                alt="Logo"
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) {
                    animateScroll.scrollTo(element.offsetTop); // 요소가 있으면 스크롤
                  } else {
                    window.location.href = `/`; // 요소가 없으면 페이지 이동
                  }
                }}
              />

              <div className="hidden xl:flex space-x-28 cursor-pointer">
                {Object.keys(menuItems).map((menu) => (
                  <div
                    key={menu}
                    className="relative text-[#171717]"
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="flex items-center"
                      onMouseEnter={() => handleMouseEnter(menu)}
                    >
                      {menu}

                      <motion.svg
                        className={`ml-2 w-6 h-6 `}
                        fill="none"
                        stroke="currentColor"
                        animate={openDropdown === menu ? "opened" : "closed"}
                        variants={arrowVariants}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>
                    <AnimatePresence>
                      {openDropdown === menu && (
                        <motion.ul
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={variants}
                          transition={{ duration: 0.5 }}
                          className="absolute left-0 bg-white shadow-lg mt-4 rounded-lg w-60 text-base "
                          onMouseEnter={() => handleMouseEnter(menu)}
                        >
                          {menuItems[menu].map((item) => (
                            <li
                              key={item}
                              onClick={() => handleNavigation(item)}
                              className="px-4 py-3 cursor-pointer text-neutral-800 hover:bg-gray-100 hover:rounded-lg"
                            >
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:flex items-center space-x-4">
              {socialLinks}
            </div>
            <div className="xl:hidden">
              <button
                onClick={showMenu}
                className="text-[#171717] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Drawer
            title={menuTitle()}
            onClose={onClose}
            closeIcon={null}
            open={isMenuOpen}
            placement={"left"}
            width={"100%"}
          >
            {/**드로어 모바일 영역 */}
            <div className="flex flex-col text-base font-semibold gap-8 text-neutral-800">
              <div className="flex flex-row items-center gap-2">
                <p>SL Protocol</p> <FaAngleDown />
              </div>
              <div className="flex flex-col gap-6 font-normal pl-4">
                <div
                  className=" flex flex-row items-center gap-2  cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("UserSolution");
                  }}
                >
                  User Solution
                </div>
                <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("Blockchain");
                  }}
                >
                  Blockchain
                </div>
                <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("TokenEconomy");
                  }}
                >
                  Token Economy
                </div>
                {/* <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("DeFiUserCase");
                  }}
                >
                 DeFi User Case
                </div> */}
                <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("DataBuyerCase");
                  }}
                >
                  Data Buyer Case
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>Technology</p> <FaAngleDown />
              </div>
              <div className="flex flex-col gap-6 font-normal pl-4  ">
                <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("Certificate&Patent");
                  }}
                >
                  Certificate & Patent
                </div>
                <div
                  className=" flex flex-row items-center gap-2 cursor-pointer hover:text-blue-400"
                  onClick={() => {
                    handleNavigationMobile("MedicalAISolution");
                  }}
                >
                  Medical AI Solution
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <p>White paper</p> <FaAngleDown />
              </div>
              <div className="flex flex-col gap-6 font-normal pl-4  ">
                <a
                  target="_blank"
                  href="https://save-the-life.gitbook.io/save-the-life"
                  className=" flex flex-row items-center"
                >
                  White paper
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1CpGhbPMOkhuDKDZVYjtoIpfukG5qCCCy/view"
                >
                  IR Deck
                </a>
              </div>

              <div>
                <div className="flex flex-row items-center gap-2">
                  <p>Community</p> <FaAngleDown />
                </div>
                <div className="flex flex-col gap-6 font-normal pl-4 mt-6 text-md ">
                  <div className=" flex flex-row items-center gap-2">
                    <div className="text-black">
                      <FaXTwitter />
                    </div>{" "}
                    <a
                      href="https://twitter.com/savethelife_SL"
                      target=" _blank"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className=" flex flex-row items-center gap-2">
                    <div className="text-blue-400">
                      <FaTelegramPlane />{" "}
                    </div>{" "}
                    <a href="https://t.me/slfoundation" target=" _blank">
                      Telegram
                    </a>
                  </div>
                  <div className=" flex flex-row items-center gap-2">
                    <div className="text-blue-700">
                      <FaLinkedinIn />{" "}
                    </div>{" "}
                    <a
                      href="https://www.linkedin.com/company/slfoundation"
                      target=" _blank"
                    >
                      Linkedin
                    </a>
                  </div>
                  <div className=" flex flex-row items-center gap-2">
                    <div className="text-gray-700">
                      <FaGithub />
                    </div>{" "}
                    <a href="https://github.com/safethelife" target=" _blank">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </nav>
  );
}

export default Navbar;

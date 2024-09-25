// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Images from "../assets/Images";

function MainLayout({ children }) {
  return (
    <div
      id="root"
      className="flex flex-col min-h-screen mx-auto tracking-tight leading-5 text-[#171717] font-medium"
      style={{ backgroundImage: `url(${Images.backgroundImage})` }}
    >
      <Navbar />
      <main className="mt-16" >
        {children}
      </main>
 
    </div>
  );
}

export default MainLayout;

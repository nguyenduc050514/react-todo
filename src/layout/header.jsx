import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
   const [isActive, setIsActive] = useState(0);
   const navItems = [
      {
         content: "Home",
         href: "/",
      },
      {
         content: "Users",
         href: "/users",
      },
      {
         content: "Books",
         href: "/books",
      },
      {
         content: "Register",
         href: "/register",
      },
   ];
   return (
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
         <div className="p-4 container mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold">
               <Link
                  to="/"
                  onClick={() => {
                     setIsActive(0);
                  }}
               >
                  Logo
               </Link>
            </div>
            <nav>
               <ul className="flex items-center">
                  {navItems.map(({ content, href }, index) => (
                     <li
                        key={content}
                        onClick={() => {
                           setIsActive(index);
                        }}
                     >
                        <Link
                           to={href}
                           className={`p-4 hover:text-gray-300 transition duration-300 ${
                              isActive === index
                                 ? "text-cyan-200 border-b border-cyan-200 rounded-b"
                                 : ""
                           }`}
                        >
                           {content}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
            <div>
               <Link
                  to="/login"
                  className="text-blue-600 bg-white rounded-full font-semibold hover:text-white hover:bg-blue-600 inline-block h-10 min-w-25 leading-10 text-center"
                  onClick={() => setIsActive(null)}
               >
                  Login
               </Link>
            </div>
         </div>
      </header>
   );
};
export default Header;

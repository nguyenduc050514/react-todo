import { Link } from "react-router-dom";
const Header = () => {
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
         content: "Products",
         href: "/products",
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
               <a href="/">Logo</a>
            </div>
            <nav>
               <ul className="flex items-center">
                  {navItems.map(({ content, href }) => (
                     <li>
                        <Link
                           to={href}
                           className="p-4 hover:text-gray-300 transition duration-300"
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
               >
                  Login
               </Link>
            </div>
         </div>
      </header>
   );
};
export default Header;

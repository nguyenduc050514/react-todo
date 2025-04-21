import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
const App = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};
export default App;

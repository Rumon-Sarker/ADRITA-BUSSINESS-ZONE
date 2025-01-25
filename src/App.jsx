import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
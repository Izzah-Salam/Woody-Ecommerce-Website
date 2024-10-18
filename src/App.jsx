import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import LandingPage from "./component/LandingPage";
import ProductCollection from "./component/ProductCollection";
import ProjectsSection from "./component/ProjectsSection";
import TestimonialPage from "./component/TestimonialPage";
import Navbar from "./component/Navbar";
import { useRoutes } from "react-router-dom";
import ProjectDetail from "./component/ProjectDetail";
import CardTab from "./component/CartTab";

// Define the routes
function CustomRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <div className="lg:mx-16 mx-6 font-Montserrat">
            <LandingPage />
            <ProductCollection />
            <TestimonialPage />
            <Gallery />
            <ProjectsSection />
          </div>

          <Footer />
          <CardTab />
        </>
      ),
    },
    {
      path: "/projectData",
      element: <ProjectDetail />, // Route to project details
    },
  ]);

  return routes;
}

function App() {
  return (
    <>
      <div>
        <div className="lg:mx-16 mx-6 font-Montserrat">
          <Navbar />
        </div>

        <CustomRoute />
      </div>
    </>
  );
}

export default App;

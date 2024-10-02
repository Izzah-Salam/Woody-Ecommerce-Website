import Gallery from "./component/Gallery";
import LandingPage from "./component/LandingPage";
import ProductCollection from "./component/ProductCollection";
import TestimonialPage from "./component/TestimonialPage";

function App() {
  return (
    <>
      <div className="lg:mx-16 mx-6 font-Montserrat">
        <LandingPage />
        <ProductCollection />
        <TestimonialPage />
        <Gallery />
      </div>
    </>
  );
}

export default App;

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Handle body scroll lock for mobile screens only
  useEffect(() => {
    const handleBodyScroll = () => {
      // Check if the screen width is below the 'md' breakpoint (768px)
      if (window.innerWidth < 768) {
        if (toggle) {
          document.body.classList.add("overflow-hidden"); // Disable scroll
        } else {
          document.body.classList.remove("overflow-hidden"); // Enable scroll
        }
      } else {
        document.body.classList.remove("overflow-hidden"); // Ensure scroll is enabled on larger screens
      }
    };

    handleBodyScroll(); // Call on initial render
    window.addEventListener("resize", handleBodyScroll); // Handle screen resize

    return () => {
      window.removeEventListener("resize", handleBodyScroll); // Clean up the event listener on unmount
      document.body.classList.remove("overflow-hidden"); // Make sure scroll is enabled when the component unmounts
    };
  }, [toggle]);

  return (
    <div className="flex justify-between items-center my-5 font-Montserrat">
      <div>
        <p className="text-2xl font-bold">Woody</p>
      </div>

      {/* Toggle Condition */}
      {toggle ? (
        <IoMdClose
          onClick={() => setToggle(!toggle)}
          className="text-2xl md:hidden block"
        />
      ) : (
        <IoIosMenu
          onClick={() => setToggle(!toggle)}
          className="text-2xl md:hidden block"
        />
      )}

      {/* Desktop Menu */}
      <div className="md:block hidden">
        <ul className="flex space-x-10 items-center font-semibold cursor-pointer">
          <li>Shop</li>
          <li>Brows</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>
            <IoPersonCircleOutline className="text-3xl" />
          </li>
          <li>
            <IoCartOutline className="bg-lightgreen text-3xl p-1 rounded-full" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed bg-black text-white z-10 top-[68px] h-screen w-full duration-300
          ${toggle ? "left-0" : "left-[-100%]"}`}
      >
        <li className="p-5">Shop</li>
        <hr className="mx-2" />
        <li className="p-5">Brows</li>
        <hr className="mx-2" />
        <li className="p-5">FAQ</li>
        <hr className="mx-2" />
        <li className="p-5">Contact</li>
        <hr className="mx-2" />
        <li className="p-5">Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;

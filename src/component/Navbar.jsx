import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToggleStatusTab } from "../store/cart";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState();
  const dispatch = useDispatch();

  // cartTab Functionality

  const handleCartTab = () => {
    dispatch(ToggleStatusTab());
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

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
    <div>
      <div className="flex justify-between items-center my-5 font-Montserrat">
        <div className="text-2xl font-bold">
          <Link to={"/"}>Woody</Link>
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

            <div
              className="bg-lightgreen text-2xl p-1 rounded-full relative"
              onClick={handleCartTab}
            >
              <li>
                <IoCartOutline />
              </li>
              <span className="absolute top-2/3 right-1/2 bg-red-600 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                {totalQuantity}
              </span>
            </div>
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
    </div>
  );
};

export default Navbar;

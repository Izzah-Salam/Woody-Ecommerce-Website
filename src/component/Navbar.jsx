import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  my-5 font-Montserrat">
      <div>
        <p className="text-2xl font-bold">Woody</p>
      </div>
      <div className="md:block hidden">
        <ul className="flex space-x-10 items-center font-semibold">
          <li>Shop</li>
          <li>Brows</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>
            <IoPersonCircleOutline className="text-3xl " />
          </li>
          <li>
            <IoCartOutline className="bg-lightgreen text-3xl p-1 rounded-full " />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

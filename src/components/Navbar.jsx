import { useNavigate } from "react-router-dom";
import soach from "../assets/soach.png";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center p-3 px-8 sticky top-0 backdrop-blur-sm z-20 bg-[#fff] shadow-md">
      <img src={soach} alt="" />
      <button
        className=" px-3 py-1 bg-[#ffa230] text-white rounded-md font-semibold font-poppins hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <Link to="/home/submenu">
      <div className="font-bold text-xl text-[#9E9E9E]">
        <FaBars />
      </div>
    </Link>
  );
};

export default Bar;

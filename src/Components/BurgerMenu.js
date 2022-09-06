
import {Link, useNavigate} from 'react-router-dom';
import { ImCross } from "react-icons/im";

const BurgerMenu = () => {
    const navigate = useNavigate();

  return (
    <section className="h-[500px]">
      <div className="flex justify-end mr-5 mt-[50px] text-[#9E9E9E] text-xl">
        <div onClick={() => navigate(-1)}><ImCross /></div>
      </div>

      <div className="font-bold text-3xl grid grid-cols-1 gap-[40px] content-center h-[100%]">
        <Link to="/home"><p>Home</p></Link>
        <p>Search</p>
        <p>Schedule</p>
        <Link to="/login"><p>Log out</p></Link>
      </div>
    </section>
  );
};

export default BurgerMenu;

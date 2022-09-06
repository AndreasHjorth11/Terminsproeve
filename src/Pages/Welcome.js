import WelcomeImg from "../Components/WelcomeImg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="relative">
      <WelcomeImg image="../wb.jpg" />
      <h1 className="text-[#F1C40E] text-7xl font-black absolute mt-[-230px] ml-[10%]">
        Believe <br />
        <div className="ml-[8%]">Yourself</div>
      </h1>
      <p className="text-white text-2xl font-black absolute mt-[-70px] ml-[17%]">
        Train like a Pro
      </p>
      <div className="bg-white h-1 w-[50px] absolute mt-[-53px] ml-[0%]"></div>
      <div className="flex justify-center items-end mt-[-53px] h-[600px] w-[100%] absolute">
        <div className="absolute bg-[#F1C40E] w-[160px] h-[60px] rounded-[30px] text-center flex justify-center animate-ping" />
        <div className="absolute bg-[#F1C40E] w-[210px] h-[60px] rounded-[30px] text-center flex justify-center font-bold text-lg">
          <Link to='/login'>
            <button className="mt-[15px]">START TRAINING</button>
          </Link>
        </div>
      </div>
      <WelcomeImg image="../wc.jpg" className="" />
    </div>
  );
};

export default Welcome;

import { useEffect, useState } from "react";
import axios from "axios";
import LargeImg from "../Data/LargeImg";
import { FaArrowLeft } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const imageUrl = "http://localhost:4000/file-bucket/1583694111195davina.jpg";

const WorkoutClassFour = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workday, setWorkday] = useState([]);
  const [worktime, setWorktime] = useState([]);
  const [workdesc, setWorkdesc] = useState([]);
  const [worktrainer, setWorktrainer] = useState([]);
  const [img, setImg] = useState([]);
  const navigate = useNavigate();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/3")
      .then((res) => {
        setWorkouts(res.data.className);
        setWorkday(res.data.classDay);
        setWorktime(res.data.classTime);
        setWorkdesc(res.data.classDescription);
        setWorktrainer(res.data.trainer.trainerName);

        fetchImage();
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="relative grid">
        <div className="relative flex space-x-80 ml-[40px]">
          <div onClick={() => navigate(-1)}>
            <FaArrowLeft className="absolute text-[#F1C40E] text-2xl mt-[30px]" />
          </div>
          <Link to="/home/submenu">
            <div>
              <FaBars className="absolute mt-[30px] text-[#F1C40E] text-2xl" />
            </div>
          </Link>
        </div>
        <div className="flex justify-center h-[400px] mt-[0px]">
          <LargeImg className="relative" />
          <div className="flex absolute self-end font-black text-[50px] leading-[50px] mr-[20%] mb-[8%] text-[#F1C40E] ml-[0px] w-[300px]">
            {workouts}
          </div>
          <div className="absolute h-full  ml-[-50%] mt-[20px] flex items-end gap-2 justify-start text-[#F1C40E]">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div className="absolute flex items-end  right-0 mr-[40px]">
            <button className="border-2 border-[#F1C40E] text-[#F1C40E] w-[80px] h-[40px] rounded-3xl mb-[-430px]">
              RATE
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[100px] flex justify-start gap-2 ml-[30px]">
        <div className="font-semibold text-xl justify-center space-x-10">
          {workday}
        </div>
        <div className="font-semibold text-xl justify-center space-x-10">-</div>
        <div className="font-semibold text-xl justify-center space-x-10">
          {worktime}
        </div>
      </div>
      <div className="flex text-lg mt-[10px] w-[100%] justify-center">
        <div className="w-[87%]">{workdesc}</div>
      </div>
      <div>
        <div className="flex text-2xl font-bold mt-[20px] ml-[25px]">
          <p>Trainer</p>
        </div>
        <div className="flex space-x-7">
          <img
            src={img}
            className="rounded-3xl h-[130px] w-[30%] object-cover ml-[20px] mt-[20px]"
          />
          <p className="mt-[60px] text-xl font-semibold">{worktrainer}</p>
        </div>
        <div className="flex justify-center mb-[20px]">
          <div className="mt-[30px] bg-[#F1C40E] w-[350px] h-[60px] rounded-[30px] text-center flex justify-center font-bold text-lg">
            <Link to="#">
              <button className="mt-[15px] w-[350px] ">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutClassFour;

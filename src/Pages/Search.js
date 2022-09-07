import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { BsFillStarFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

import MinorImg from "../Data/MinorImg";

const davina = "http://localhost:4000/file-bucket/1583694111195davina.jpg";
const khaled = "http://localhost:4000/file-bucket/1583694097116khaled.jpg";
const sara = "http://localhost:4000/file-bucket/1583694106827sara.jpg";

const Search = () => {
  const [workouts2, setWorkouts2] = useState([]);
  const [img, setImg] = useState([]);
  const [img2, setImg2] = useState([]);
  const [img3, setImg3] = useState([]);
  const [worktrainer1, setWorktrainer1] = useState([]);

  const fetchImage = async () => {
    const res = await fetch(khaled);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg2(imageObjectUrl);
  };

  const fetchImage2 = async () => {
    const res = await fetch(sara);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg3(imageObjectUrl);
  };

  const fetchImage3 = async () => {
    const res = await fetch(davina);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/1")
      .then((res) => {
        setWorkouts2(res.data.className);
        setWorktrainer1(res.data.trainer.trainerName);
        fetchImage();
        fetchImage2();
        fetchImage3();
      })
      .catch((err) => {});
  }, []);

  const [workouts3, setWorkouts3] = useState([]);
  const [worktrainer2, setWorktrainer2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/2")
      .then((res) => {
        setWorkouts3(res.data.className);
        setWorktrainer2(res.data.trainer.trainerName);
      })
      .catch((err) => {});
  }, []);

  const [workouts4, setWorkouts4] = useState([]);
  const [worktrainer3, setWorktrainer3] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/3")
      .then((res) => {
        setWorkouts4(res.data.className);
        setWorktrainer3(res.data.trainer.trainerName);
      })
      .catch((err) => {});
  }, []);

  const [worktrainer4, setWorktrainer4] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/4")
      .then((res) => {
        setWorktrainer4(res.data.trainer.trainerName);
      })
      .catch((err) => {});
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex space-x-32 ml-[40px] mt-[20px]">
        <div onClick={() => navigate(-1)}>
          <FaArrowLeft className="absolute text-[#F1C40E] text-2xl mt-[30px]" />
        </div>
        <div className="text-2xl font-bold mt-[20px]">Search</div>
        <Link to="/home/submenu">
          <div>
            <FaBars className="absolute mt-[30px] text-[#F1C40E] text-2xl" />
          </div>
        </Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search Classes"
          className="relative pl-[50px] border-2 w-[380px] mt-[40px] rounded-3xl h-[50px]"
        ></input>
        <div className="absolute mt-[-32px] ml-[40px] text-lg text-[#9E9E9E]">
          <HiOutlineSearch />
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold flex mt-[40px] ml-[30px]">
          <p>Popular Classes</p>
        </div>

        <div>
          <div className="whitespace-nowrap overflow-x-auto">
            <div className="flex mt-[20px] ml-[40px] relative">
              <MinorImg className="relative" />
              <div>
                <Link to="/weightworkout">
                  <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[-104%] mt-[28.7%]" />
                  <div className="flex absolute self-end font-bold text-[11px] ml-[-102%] mt-[33%]">
                    {workouts2}
                    <div className="flex absolute mt-[20px] ml-[5px] gap-2">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/aerobatics">
                  <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[-49%] mt-[28.7%]" />
                  <div className="flex absolute self-end font-bold text-sm ml-[-45%] mt-[31%]">
                    {workouts3}
                    <div className="flex absolute mt-[25px] ml-[0px] gap-2">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/cycling">
                  <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[6%] mt-[28.7%]" />
                  <div className="flex absolute self-end font-bold text-[12px] ml-[8%] mt-[31%]">
                    {workouts4}
                    <div className="flex absolute mt-[25px] ml-[5px] gap-2">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl font-bold flex mt-[40px] ml-[30px]">
          <p>Popular Trainers</p>
        </div>
        <div className="grid w-[150px] gap-4 mt-[20px] mb-[30px] ml-[30px]">
          <img
            src={img}
            className="h-[120px] w-[120px] object-cover rounded-xl relative"
          />
          <div className="absolute mt-[40px] ml-[150px] text-xl font-bold">{worktrainer3}</div>
          <img
            src={img2}
            className="h-[120px] w-[120px] object-cover rounded-xl relative"
          />
          <div className="absolute mt-[180px] ml-[150px] text-xl font-bold">{worktrainer4}</div>
          <img
            src={img3}
            className="h-[120px] w-[120px] object-cover rounded-xl relative"
          />
          <div className="absolute mt-[320px] ml-[150px] text-xl font-bold">{worktrainer2}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;

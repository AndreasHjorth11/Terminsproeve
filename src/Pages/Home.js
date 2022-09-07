import Heading from "../Components/Heading";
import Bar from "../Components/Bar";
import Fetch from "../Data/Fetch";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageFetch from "../Data/ImageFetch";
import MinorImg from "../Data/MinorImg";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/4")
      .then((res) => {
        setWorkouts(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts2, setWorkouts2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/1")
      .then((res) => {
        setWorkouts2(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts3, setWorkouts3] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/2")
      .then((res) => {
        setWorkouts3(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts4, setWorkouts4] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/3")
      .then((res) => {
        setWorkouts4(res.data.className);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="flex space-x-44 justify-center mt-[30px]">
        <Heading text="Popular Classes" />
        <Bar />
      </div>
      {/* {workouts.map((workout) => (
          <div key={workout.id}>{workout.className}</div>
        ))} */}
      <div>
        <Link to="/lowerabsworkout">
          <div className="flex justify-center h-[400px] mt-[50px]">
            <ImageFetch className="relative" />
            <div className="flex w-[300px] h-20 bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end mr-[19.5%]" />
            <div className="flex absolute self-end font-bold text-xl mr-[35%] mb-[10%]">
              {workouts}
              <div className="flex absolute mt-[35px] gap-2">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex mt-[30px] ml-[30px]">
          <Heading text="Classes for You" />
        </div>
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
    </div>
  );
};

export default Home;

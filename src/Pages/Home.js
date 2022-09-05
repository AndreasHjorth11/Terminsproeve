import Heading from "../Components/Heading";
import Bar from "../Components/Bar";
import Fetch from "../Data/Fetch";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageFetch from "../Data/ImageFetch";
import MinorImg from "../Data/MinorImg";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/4")
      .then((res) => {
        console.log(res.data.className);
        setWorkouts(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts2, setWorkouts2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/1")
      .then((res) => {
        console.log(res.data.className);
        setWorkouts2(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts3, setWorkouts3] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/2")
      .then((res) => {
        console.log(res.data.className);
        setWorkouts3(res.data.className);
      })
      .catch((err) => {});
  }, []);

  const [workouts4, setWorkouts4] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes/3")
      .then((res) => {
        console.log(res.data.className);
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
        <div className="flex justify-center h-[400px] mt-[50px]">
          <ImageFetch className="relative" />
          <div className="flex w-[300px] h-20 bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end mr-[19.5%]" />
          <div className="flex absolute self-end font-bold text-xl mr-[35%] mb-[8%]">
            {workouts}
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-[30px] ml-[30px]">
          <Heading text="Classes for You" />
        </div>
        <div className="whitespace-nowrap overflow-x-auto">
          <div className="flex mt-[20px] ml-[40px] relative">
            <MinorImg className="relative" />
            <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[-3.9%]" />
            <div className="flex absolute self-end font-bold text-[11px] ml-[-2%] mb-[8%]">
              {workouts2}
            </div>

            <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[50.9%]" />
            <div className="flex absolute self-end font-bold text-sm ml-[52.5%] mb-[8%]">
              {workouts3}
            </div>

            <div className="flex w-[170px] h-[60px] bg-[#F1C40E] absolute rounded-bl-2xl rounded-tr-[60px] self-end ml-[106%]" />
            <div className="flex absolute self-end font-bold text-[12px] ml-[108%] mb-[8%]">
              {workouts4}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes")
      .then((res) => {
        console.log(res);
        setClasses(res.data);
      })
      .catch((err) => {});
  }, []);


  return (
    <div>
      {/* {trainers.map((trainer) => (
        <div key={trainer.id}>{trainer.trainerName}</div>
      ))} */}
    </div>
  );
};

export default Fetch;

import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
//   const [trainers, setTrainers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/trainers")
//       .then((res) => {
//         console.log(res);
//         setTrainers(res.data);
//       })
//       .catch((err) => {});
//   }, []);

  return (
    <div>
      {/* {trainers.map((trainer) => (
        <div key={trainer.id}>{trainer.trainerName}</div>
      ))} */}
    </div>
  );
};

export default Fetch;

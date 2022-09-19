import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { createRef } from "react";

const Login = () => {
  let { setIsAuthticated } = useContext(AuthContext);
  let navigate = useNavigate();
  let username = createRef();
  let password = createRef();

  const [loginError, setLoginError] = useState(undefined);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username.current.value}&password=${password.current.value}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoginError(true);
          throw new Error("unauthorized");
        }
      })
      .then((data) => {
        console.log(data);
        setIsAuthticated(data.token);
        //refactor this navigate...
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <div className="mt-[60px]" />
      <h1 className="text-[#F1C40E] text-7xl ml-[-40px] font-black">
        Believe <br />
        <div className="ml-[8%]">Yourself</div>
      </h1>
      <p className="text-black text-2xl font-black absolute mt-[30px] ml-[17%]">
        Train like a Pro
      </p>
      <div className="bg-black h-1 w-[50px] absolute mt-[48px] ml-[0%]"></div>
      <p className="font-bold text-xl mt-[150px] flex ml-[40px]">
        Log in with your credentials
      </p>
      <p></p>
      {loginError && <div className="text-red-500">Unauthorized User!</div>}
      <form>
        <div className="mt-[30px]">
          <label className="text-black">
            <input
              placeholder="Enter your Username.."
              type="text"
              ref={username}
              className="bg-white w-[350px] rounded-[35px] border-[#9E9E9E] border-2 pl-5 h-[70px]"
            ></input>
            <div className="mt-5" />
            <input
              type="password"
              placeholder="Enter your Password.."
              ref={password}
              className="bg-white w-[350px] rounded-[35px] border-[#9E9E9E] border-2 pl-5 h-[70px]"
            ></input>
          </label>
        </div>
      </form>
      <div className="flex justify-center mt-[20px]">
        <div className="absolute bg-[#F1C40E] w-[350px] h-[60px] rounded-[30px] text-center flex justify-center font-bold text-lg">
          <Link to="/home">
            <button onClick={(e) => handleLogin(e)} className="mt-[15px] w-[350px] ">LOG IN</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;

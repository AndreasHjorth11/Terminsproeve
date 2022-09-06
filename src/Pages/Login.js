import { Link } from "react-router-dom";

import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
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
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-[30px]">
              <label className="text-black">
                <input
                  placeholder="Enter your Username.."
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="bg-white w-[350px] rounded-[35px] border-[#9E9E9E] border-2 pl-5 h-[70px]"
                ></input>
                <div className="mt-5" />
                <input
                  type="password"
                  placeholder="Enter your Password.."
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="bg-white w-[350px] rounded-[35px] border-[#9E9E9E] border-2 pl-5 h-[70px]"
                ></input>
              </label>
            </div>
          </form>
          <div className="flex justify-center mt-[20px]">
            <div className="absolute bg-[#F1C40E] w-[350px] h-[60px] rounded-[30px] text-center flex justify-center font-bold text-lg">
              <Link to="/home">
              <button className="mt-[15px] w-[350px] ">LOG IN</button>
              </Link>
            </div>
          </div>
        </section>
  );
};

export default Login;

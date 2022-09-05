import "./App.css";
import Fetch from "./Data/Fetch";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
      <Fetch />

    </div>
  );
};

export default App;

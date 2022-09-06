import "./App.css";
import Fetch from "./Data/Fetch";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import BurgerMenu from "./Components/BurgerMenu";
import WorkoutClassOne from "./Pages/WorkoutClassOne";
import WorkoutClassTwo from "./Pages/WorkoutClassTwo";
import WorkoutClassThree from "./Pages/WorkoutClassThree";
import WorkoutClassFour from "./Pages/WorkoutClassFour";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/lowerabsworkout' element={<WorkoutClassOne />} />
        <Route exact path='/weightworkout' element={<WorkoutClassTwo />} />
        <Route exact path='/aerobatics' element={<WorkoutClassThree />} />
        <Route exact path='/cycling' element={<WorkoutClassFour />} />
        <Route exact path='/home/submenu' element={<BurgerMenu />} />
      </Routes>
      <Fetch />

    </div>
  );
};

export default App;

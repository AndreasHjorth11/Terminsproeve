import "./App.css";
import Fetch from "./Data/Fetch";
import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <div className="App">
      <Fetch />
      <Welcome />
    </div>
  );
};

export default App;

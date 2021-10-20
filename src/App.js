import "./App.css";
import Hobbies from "./components/Hobbies";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/* <!-- Profile --> */}
      <Profile />
      {/* <!-- Hobbies --> */}
      <Hobbies />
      {/* <!-- Skills --> */}
      <Skills />
    </div>
  );
}

export default App;

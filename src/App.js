import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="font-mono text-xl">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;

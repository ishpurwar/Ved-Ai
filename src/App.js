import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Login from "./components/loginUPO/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Translator from "./components/translator/Translator";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Translator /> */}
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/NavBar/NavBar";
import Review from "./components/Review/Review";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;

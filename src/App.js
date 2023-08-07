import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

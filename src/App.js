import AboutUs from "./pages/about";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Store from "./pages/store";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edu from "./pages/IsiDalamHome/Edukasi";
import War from "./pages/IsiDalamHome/War";
import Sf from "./pages/IsiDalamHome/SienceFiction";
import Adv from "./pages/IsiDalamHome/Advanture";
import Hrr from "./pages/IsiDalamHome/Horor";
import Fan from "./pages/IsiDalamHome/Fantasy";




function App() {
  document.title = "E-Libro";
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} /> 
            <Route path="/store" element={<Store/>} /> 
            <Route path="/register" element={<Register/>}/>  
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<AboutUs/>}/> 
            <Route path="/edukasi" element={<Edu/>}/> 
            <Route path="/war" element={<War/>}/> 
            <Route path="/sf" element={<Sf/>}/> 
            <Route path="/advanture" element={<Adv/>}/> 
            <Route path="/horor" element={<Hrr/>}/> 
            <Route path="/fantasy" element={<Fan/>}/> 
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
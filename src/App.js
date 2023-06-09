import Login from "./components/login/login";
import Register from "./components/login/register";
import Store from "./components/store/store";
import AboutUs from "./components/about/about";
import Home from "./pages/pageshome";
import Materi1 from "./components/materi/materi1/materi";
import Materi2 from "./components/materi/materi2/materi2";
import Materi3 from "./components/materi/materi3/materi3";
import Materi3hal2 from "./components/materi/materi3/materi3hal2";
import Materi3hal3 from "./components/materi/materi3/materi3hal3";
import Materi3hal4 from "./components/materi/materi3/materi3hal4";
import Materi3hal5 from "./components/materi/materi3/materi3hal5";
import Materi3hal6 from "./components/materi/materi3/materi3hal6";
import Materi3hal7 from "./components/materi/materi3/materi3hal7";
import Materi3hal8 from "./components/materi/materi3/materi3hal8";
import Materi3hal9 from "./components/materi/materi3/materi3hal9";
import Materi3hal10 from "./components/materi/materi3/materi3hal10";
import Materi3hal11 from "./components/materi/materi3/materi3hal11";
import Materi3hal12 from "./components/materi/materi3/materi3hal12";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  document.title = "WASSAP HOMIE";
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} /> 
            <Route path="/store" element={<Store/>} /> 
            <Route path="/register" element={<Register/>}/>  
            <Route path="/home" element={<Home/>}/> 
            <Route path="/materi1" element={<Materi1/>}/>
            <Route path="/materi2" element={<Materi2/>}/> 
            <Route path="/materi3" element={<Materi3/>}/> 
            <Route path="/about" element={<AboutUs/>}/> 
            <Route path="/materi3hal2" element={<Materi3hal2/>}/> 
            <Route path="/materi3hal3" element={<Materi3hal3/>}/> 
            <Route path="/materi3hal4" element={<Materi3hal4/>}/> 
            <Route path="/materi3hal5" element={<Materi3hal5/>}/> 
            <Route path="/materi3hal6" element={<Materi3hal6/>}/> 
            <Route path="/materi3hal7" element={<Materi3hal7/>}/> 
            <Route path="/materi3hal8" element={<Materi3hal8/>}/> 
            <Route path="/materi3hal9" element={<Materi3hal9/>}/> 
            <Route path="/materi3hal10" element={<Materi3hal10/>}/> 
            <Route path="/materi3hal11" element={<Materi3hal11/>}/> 
            <Route path="/materi3hal12" element={<Materi3hal12/>}/> 
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
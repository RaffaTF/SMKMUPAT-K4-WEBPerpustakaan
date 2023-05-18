import Login from "./components/login/login";
import Register from "./components/login/register";
import Store from "./components/store/store";
import Home from "./pages/pageshome";
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

          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
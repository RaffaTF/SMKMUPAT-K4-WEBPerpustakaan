import Login from "./components/login/login";
import Register from "./components/login/register";
import Store from "./components/store/store";
import Home from "./pages/pageshome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




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

          </Routes>
        </Router>
       
      </header>
      <footer className="bg-black">
      <div className="container">
        <p className="text-white content-center">&copy;2022-{new Date().getFullYear()} E-Libro. All rights reserved.</p>
      </div>  j 
    </footer>
    </div>
  );
}

export default App;
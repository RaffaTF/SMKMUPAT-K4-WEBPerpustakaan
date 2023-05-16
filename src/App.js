import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pintro from "./pages/Pagesintro";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/intro" element={<Pintro/>} />

              
      
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
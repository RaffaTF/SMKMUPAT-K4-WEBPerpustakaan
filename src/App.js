import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />      
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
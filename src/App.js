import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import Workflows from "./pages/workflows/Workflows";
import LoginPage from "./pages/loginPage/LoginPage";
import { useState } from "react";


function App() {
  const [isDark, setIsDark] = useState(false);

  const handletheme = () => {
      setIsDark(!isDark)
  }

  return (
    <div className="App" data-theme={isDark ? "dark" : 'light'}>
      <div className="darkMode">
        <form action="" >
          <input type="checkBox" onClick={handletheme}/>
          <label htmlFor="">Dark Mode</label>
        </form>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/workflow" element={<Workflows />} />
      </Routes>
    </div>
  );
}

export default App;

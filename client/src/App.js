import { useSelector } from "react-redux";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
import { Route, Routes, Navigate } from 'react-router-dom'
function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div div className="paddings App" >
      <div className="blur" style={{ top: '-20%', right: '0', background: '#6B9AC4' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path="/" element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />} />
        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />} />
      </Routes>
    </div >
  );
}

export default App;

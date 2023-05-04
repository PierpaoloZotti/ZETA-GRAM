import "./App.css"
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="paddings App">
      <div className="blur" style={{ top: '-20%', right: '0', background: '#6B9AC4' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div >
  );
}

export default App;

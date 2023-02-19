import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import Explore from "./pages/Explore";
import CreateBlog from "./pages/CreateBlog";
import LoginAndSignup from "./pages/LoginAndSignup";
import BlogView from "./pages/BlogView";
import './App.css'
import Navbar from "./Components/Navbar";
import Reset from "./pages/Reset";
import Register from "./pages/Register";

function App() {
    return(
        <div className="">
            <Router>
            {/* <Navbar/> */}
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/profile" element={<UserProfile />} />
                <Route exact path="/create" element={<CreateBlog />} />
                <Route exact path="/login" element={<LoginAndSignup />} />
                <Route exact path="/blogView" element={<BlogView />} />
                <Route exact path="/reset" element={<Reset/>} />
                <Route exact path="/register" element={<Register />} />
                </Routes>
            </Router>
            
        </div>
    );
}

export default App
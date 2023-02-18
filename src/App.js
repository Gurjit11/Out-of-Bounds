import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import home from "./pages/home";
import Admin from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import Explore from "./pages/Explore";
import CreateBlog from "./pages/CreateBlog";
import LoginAndSignup from "./pages/LoginAndSignup";

function App() {
    return(
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/create">Create</Link>
                <Link to="/login">Login</Link>
                
            </nav>

            <Router>
                <Route path="/" element={<home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/create" element={<CreateBlog />} />
                <Route path="/login" element={<LoginAndSignup />} />
            </Router>
        </Router>
    );
}

import { useState } from "react";
import "./navbar.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <div style={{color:"darkblue"}}>CineConnect</div>
          <img
            src=""
            alt=""
          />
          <Link to="/" className="link">
          <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
          <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
          <Link to="/community" className="link"> 
          <span>Community</span>
          </Link>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
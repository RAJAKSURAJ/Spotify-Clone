import React from "react";
import "./Header.css";
import {useStateValue} from "./StateProvider";
import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
import { useEffect} from "react";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
console.log("user",user)
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar  src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
import React from 'react'
import './Sidebar.css'
import { SideBarOption } from './SideBarOption.js'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from './StateProvider';
export default function SideBar (){
  const [{playlists},dispatch]=useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
       <SideBarOption Icon={HomeIcon} option="Home" />
      <SideBarOption Icon={SearchIcon} option="Search" />
      <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist) => (
        <SideBarOption option={playlist.name} />
      ))}
    </div>
  )
}



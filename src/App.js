import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Login from './Login';
import {Player} from './Player'
import { useStateValue } from './StateProvider';
import {getTokenFromResponse} from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
const spotify=new SpotifyWebApi()
function App() {
  const [{ user,token }, dispatch] = useStateValue();
  useEffect(()=>{
    const hash=getTokenFromResponse();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token)
    {
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(((user)=>{
       dispatch({
        type:"SET_USER",
        user:user,
       })
       
      }))
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      // 37i9dQZEVXcJZyENOWUFo7
      spotify.getPlaylist("31j4swtf55zvvuvy23bjgnd27xxi").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
    }
  },[])
  console.log("token",token)
  return (
    <div className="app">
    {
     token ? <Player/> :<Login/>
    }
      
    </div>
  );
}

export default App;

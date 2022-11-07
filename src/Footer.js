import React from 'react'
import './Footer.css'
import { useStateValue } from "./StateProvider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
export function Footer(){
  const [{ token, item, playing }, dispatch] = useStateValue();
  return (
    <div className="footer">
      <div className="footer__left">
      <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center">
      <ShuffleIcon className="footer__green"/>
      <SkipPreviousIcon className="footer_icon" />
      <PauseCircleOutlineIcon  fontSize="large" className="footer__icon"/>
      <SkipNextIcon  className="footer__icon" />
      <RepeatIcon className="footer__green" />
      
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}



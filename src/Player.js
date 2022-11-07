import './Player.css'
import SideBar from'./SideBar.js'
import {Body} from './Body.js'
import {Footer} from './Footer.js'
export function Player({spotify})  {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar/>
     
      <Body spotify={spotify}/>
     
      </div>
      <Footer/>
     
    </div>
  )
}

// export default Player

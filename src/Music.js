import React ,{Component}from 'react'; 
import logo from './logoreact.png' ; 
import song1 from './music/song1.mp3';
import song2 from './music/song2.mp3';
import song3 from './music/song3.mp3';
import song4 from './music/song4.mp3';
import song5 from './music/song5.mp3';
import song6 from './music/song6.mp3';
import song7 from './music/song7.mp3';
import song8 from './music/song8.mp3';
import song9 from './music/song9.mp3';
import {Howl, Howler} from "howler";
import './index.css';
let playlist=[
{ audio:song1 ,title:"Track 1"},
{ audio:song2 ,title:"Track 2"},
{ audio:song3 ,title:"Track 3"},
{ audio:song4 ,title:"Track 4"},
{ audio:song5 ,title:"Track 5"},
{ audio:song6 ,title:"Track 6"},
{ audio:song7 ,title:"Track 7"},
{ audio:song8 ,title:"Track 8"},
{ audio:song9 ,title:"Track 9"} ]
 
let activesong="" ; 
let sound;  
let activeindex=undefined ;

class Music extends Component {
 

  Audioplay=()=>{
    if (this.Audiopause){
      sound.play();
    }
  }
  
  Audiopause=()=>{
    if (activesong!==""){
      sound.pause(activesong);
    }
  } 

Audionext=()=>{

      
      if (activeindex===playlist.length-1 || activeindex===undefined){
      
        activeindex=0 ; 
      } else {
       
        activeindex++ ; 
      }
     if (sound){
      sound.unload(); 
     }
   let src =playlist[activeindex].audio ;
   sound = new Howl ({
    src
  }); 
 activesong=sound.play() ; 

}
Audioprevious=()=>{

      
  if (activeindex===0 ){
    
    activeindex=playlist.length-1 ; 
  } else {
    
    activeindex-- ; 
  }
  if (sound){
    sound.unload(); 
   }
let src =playlist[activeindex].audio ;
sound = new Howl ({
src
}); 
activesong=sound.play() ;


}

  Audioplaylist =(index)=>{
    let src=playlist[index].audio
    if (sound){
      sound.unload(); 
    }
    sound = new Howl ({
    src
  }); 

 activesong=sound.play() ; 
 activeindex=index ; 
 

 
} 

      list=()=>{

      return (playlist.map((sound,index)=>{
      return( 
         <div className="list">
       <ul>
       <button className="listbuttons" onClick={()=>this.Audioplaylist(index)}>{sound.title}</button>
       </ul>
       </div>
      );
       
      
    })
      )}  
    
         
    render(){ 
      Howler.volume(0.5);
      return (
       
        <div className="App">
        
       <div className="buttons">
       
       
       <button className="previous"  onClick={()=>this.Audioprevious()}>Previous</button> 
         <button  onClick={()=>this.Audiopause()}>Pause</button>
          <button  onClick={()=>this.Audioplay()}>Play</button>
          <button className="next" onClick={()=>this.Audionext()}>Next</button>
          </div>
         
         
         
              <div className="stylish">
         <p className="text">Playlist Tracks</p>
         {this.list()}
         
         </div>
         
         </div>
      );
    }
}
export default Music; 

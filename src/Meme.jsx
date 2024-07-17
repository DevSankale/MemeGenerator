import React from "react";
import memesData from "./memesData";


export default function Meme(){

const [memeImage,setMemeImage]=React.useState("")
        function getMeme(){
                      
         let url;
                        
         const memeArray = memesData.data.memes;
         const randomMeme = Math.floor(Math.random()*memeArray.length);
         url = memeArray[randomMeme].url;
                          
          setMemeImage(url)
          console.log(url);
                          
        };


  return(
    <>
    <div className="myForm">
     
      <input className="formInput" type="text" placeholder="Type Here.."/>
      <input
      className="formInput"
      type="text" placeholder="Type Here.."/>
    
    
      <button className="button" onClick ={getMeme}>Get a new meme image</button>
    </div>
    <div className="memeImage">
      <img src={memeImage} width="350px" height="auto"/>
    </div>
 
    </>
  )
}




import React from "react";
import memesData from "./memesData";


export default function Meme(){
const [allMemeImages,setAllMemeImages]=React.useState(memesData);
const [meme,setMemeImage]=React.useState({
  topText:"",
  bottomText:"",
  randomImage:"https://i.imgflip.com/30b1gx.jpg"
});
        function getMeme(){
                      
         let url;
                        
         const memeArray = allMemeImages.data.memes;
         const randomMeme = Math.floor(Math.random()*memeArray.length);
         url = memeArray[randomMeme].url;
                          
          setMemeImage((prevMemeImage)=>{
           return   {
                ...prevMemeImage,
                randomImage:url
              }
            
          });
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
      <img src={meme.randomImage} width="350px" height="auto"/>
    </div>
 
    </>
  )
}




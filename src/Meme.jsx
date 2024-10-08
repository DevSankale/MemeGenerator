import React from "react";


export default function Meme(){

const [meme,setMemeImage]=React.useState({
  topText:"",
  bottomText:"",
  randomImage:"https://i.imgflip.com/1g8my4.jpg"
});
const [allMemeImages,setAllMemeImages]=React.useState([]);

React.useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes") 
  .then(res=>res.json())
  .then(data=>setAllMemeImages(data.data.memes)),[]
})


        function getMeme(){
                      
         let url;
                        
         
         const randomMeme = Math.floor(Math.random()*allMemeImages.length);
         url = allMemeImages[randomMeme].url;
                          


          setMemeImage((prevMemeImage)=>{
           return   {
                ...prevMemeImage,
                randomImage:url
              }
            
          });
        };
        function handleChange(event){
          setMemeImage((prevState)=>{
          return (
            {
              ...prevState,
              [event.target.name]:event.target.value
            }
          )
        })
      }

        function handleSubmit(event){
                event.preventDefault()
      }
  return(
    <>
    <div className="myForm" onSubmit={handleSubmit}>
     
      <input className="formInput" 
             type="text" 
             placeholder="Type Here.."
             onChange={handleChange}
             name="topText"
             value={meme.topText}/>
      <input
             className="formInput"
             type="text" 
             placeholder="Type Here.."
             onChange={handleChange}
             name="bottomText"
             value={meme.bottomText}/>
      <button className="button" 
             onClick ={getMeme}>
             Get a new meme image
      </button>
    </div>
    <div className="meme">
             <img className="memeImage" src={meme.randomImage} 
             width="350px"
             height="auto"/>
             <h2 className="meme--text top">{meme.topText}</h2>
             <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
 
    </>
  )
}




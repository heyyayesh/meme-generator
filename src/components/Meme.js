import React from "react";
import Download from "./Download";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function inner() {
      const apiData = await fetch('https://api.imgflip.com/get_memes');
      const jsonData = await apiData.json();
      setAllMemes(jsonData.data.memes);
      console.log(jsonData.data.memes);
    }

    inner();
  }, []);
  
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/23ls.jpg',
    width: 500,
    id: '97984'
  });

  function handleChange(e) {
    const {name, value} = e.target;
    
    setMeme((prevState) => {
      return {
        ...prevState,
        [name] : [value],
      }
    })
  }

  function getImage() {
    const rand = Math.floor(Math.random() * allMemes.length);
    const imgUrl = allMemes[rand].url;
    const wid = allMemes[rand].width;
    const id = allMemes[rand].id;

    setMeme((prevMeme) => ({
      ...prevMeme,
      url: imgUrl,
      width: wid,
      id: id
    }))
  }

  const memeTextStyle = {
    width: meme.width,
  }

  return (
    <div className="main">

      <div className="controls">
        <input
          value={meme.topText}
          name="topText"
          id="top-text"
          placeholder="Top Text"
          autoComplete="off"
          onChange={handleChange}
        />

        <input    
          value={meme.bottomText}
          name="bottomText"
          id="bottom-text"
          placeholder="Bottom Text"
          autoComplete="off"
          onChange={handleChange}
        />

        <button
          id="meme-btn"
          onClick={getImage}
        >
          Get a new meme image  🖼
        </button>

      </div>

      <div className="meme">
          <img
            src={meme.url}
            alt="Meme"
            className="meme-img"
          />
          <h2 
            style={memeTextStyle} 
            className="top-text">
            {meme.topText}
          </h2>
          <h2 
            style={memeTextStyle} 
            className="bottom-text">
            {meme.bottomText}
          </h2>        
        </div>

        <Download url={meme.url} name={meme.id} />
      
    </div>
  )
}
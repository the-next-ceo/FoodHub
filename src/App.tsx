import React from 'react';
import './App.css';
import foodHub from "./homepage/home";

function App() {
  return (
    
   <div className="App">
    {/* <span>{Navbar()}</span> */}
    
    <span>{foodHub()}</span>
    {/* <span className="tenor-gif-embed" data-postid="6079735" data-share-method="host" data-aspect-ratio="2.06612" data-width="100%"><a href="https://tenor.com/view/okonomiyaki-japanese-food-anime-food-gif-6079735">Okonomiyaki Japanese Food GIF</a>from <a href="https://tenor.com/search/okonomiyaki-gifs">Okonomiyaki GIFs</a></span> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
    <img src={require('./gif/food.gif')} alt="food" className='image'/>


   </div> 
   

  );
}

export default App;

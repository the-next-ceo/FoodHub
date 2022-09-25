import React from 'react';
import './App.css';
import foodHub from "./homepage/home";

function App() {
  return (
    
   <div className="App">

    <span>{foodHub()}</span>
    <img width={1000} src={require('./gif/hello.gif')} alt="food" className='image'/>
    {/* <video   autoPlay = {true}  loop muted playsInline className='video'>
      <source src="./gif/new.mp4" type="video/mp4" />
    </video> */}


   </div> 
   

  );
}

export default App;

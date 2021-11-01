import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import image from "../images/6.jpg";

function Home () {
  return (
    
    <main>
        <img src={image} alt="Wau" className="absolute object-cover w-full h-full"  />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-green-700 font-bold cursive leading-none lg:leading-snug home-name">Welcome to Malaysian Creation!</h1><br />
            <br /> 
                <h2 className="text-2xl text-green-700 font-bold cursive leading-none lg:leading-snug home-name">Introducing the beauty of a unique culture through it's many offerings.</h2><br /><br />
                    <br></br>
                        <div>          
                        <Button variant="contained" color="default"><NavLink to='/categories'>Browse</NavLink></Button>
                        <Button variant="contained" color="default"><NavLink to='/categories/new'>Submit</NavLink></Button>
                        </div>
        </section>
    </main>
   
  );
};

export default Home;
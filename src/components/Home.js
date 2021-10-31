import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home (props) {
  return (
    
    <div>
        <div className="jumbotron2"></div>
          <div className="home-container">
            <h1>Welcome to Malaysian Creations!</h1> 
            <p>Introducing the beauty of a unique culture through it's many offerings.</p>   
              <div>
                <br></br>
                    <div>          
                      <Button variant="contained" color="default"><NavLink to='/categories'>Browse</NavLink></Button>
                      <Button variant="contained" color="default"><NavLink to='/categories/new'>Add New</NavLink></Button>
                    </div>
          </div>
        </div>
    </div>
   
  );
};

export default Home;
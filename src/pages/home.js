import Kartu from '../components/home/Card';
import Navi from '../components/home/navbar';
import Gambr from '../components/home/Sideimg';
import React from 'react';

const Home = () => {
    return (
      <>
   <Navi/>
   <div>
   <Gambr/>
   <br/>
   <hr/>
   <h2>Recommendation</h2>
   <Kartu/>
    </div>
    </>    
       
    )
}

export default Home;

import Kartu from '../components/home/Card';
import Navi from '../components/home/navbar';
import Gambr from '../components/home/Sideimg';
import React from 'react';

const Home = () => {
    return (
        <div>
   <Navi/>
   <Gambr/>
   <br/>
   <hr/>
   <h2>Most Wanted</h2>
   <Kartu/>
 </div>       
       
    )
}

export default Home;

import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  
  // FETCH DATA

  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
    fetch(url)
    .then(res => res.json())
    .then(data => setLeagues(data.leagues.slice(0, 9)))
  }, [])
  
  return (
    <div>

<header>
<h1 style={{backgroundImage:' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.lawinsport.com/media/zoo/images/The-stadium_01982368c4b5db6822abe729707173d7.jpeg)', padding:'100px', backgroundSize:'100% 100%',
backgroundRepeat:'no-repeat', opacity:'1.0',color:'white'}}>LEAGUE OF LEGENDS</h1>
</header>

  {/* DYNAMIC DATA */}

<div className="row" style={{backgroundColor: '#E82F00', marginTop:'-8px'}}>
{
  leagues.map(league => <League league ={league} ></League>)
}
</div>
    </div>

  );
};

export default Home;
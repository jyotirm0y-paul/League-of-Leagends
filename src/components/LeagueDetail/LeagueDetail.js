import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gender from '../Gender/Gender';
import './LeagueDetail.css'
import facebook from './../../icon/Facebook.png'
import twitter from './../../icon/Twitter.png'
import youtube from './../../icon/YouTube.png'
import found from './../../icon/found 1.png'
import flag from './../../icon/flag (1) 1.png'
import football from './../../icon/football (1) 1.png'
import male from './../../icon/male-gender-sign 1.png'

const LeagueDetail = () => {

  // HOOKS
  const { id } = useParams();
  const [leagueDetail, setLeagueDetail] = useState([]);
  const [gender, setGender] = useState(false);

  // BUTTON ONCLICK
  const handleClick = () => setGender(!gender);

// DESTRUCTOR
  const { strLeague, strCountry, strLogo, strSport, strGender, intFormedYear, strDescriptionEN, strBanner, strFacebook, strTwitter, strYoutube } = leagueDetail;

  // API
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagueDetail(data.leagues[0]))
  }, [id])

  return (

    <div style={{ backgroundColor: '#F76045' }}>
      <div className="banner">
      <img style={{filter: 'brightness(40%)'}} src={strBanner} alt="" />
      
      <div className="logo">
      <img className="logo" src={strLogo} alt="" />
      </div>
      </div>

{/* LEAGUE DETAILS */}
      <div className="league-details">
        <div className="text-left mt-3">
          <h4 className="intro">{strLeague}</h4>
          <h6 className="intro"> <img src={found} alt=""/> Founded: {intFormedYear}</h6>
          <h6 className="intro"><img src={flag} alt=""/> Country: {strCountry}</h6>
          <h6 className="intro"><img src={football} alt=""/> Sport Type: {strSport}</h6>
          <h6 className="intro" style={{ cursor: 'pointer' }} onClick={handleClick}> <img src={male} alt=""/> Gender: {strGender}</h6>
        </div>

        {/* GENDER */}
        <div className="">
          <Gender gender={gender}></Gender>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div>
        <p className="description">{strDescriptionEN}</p>
        <br />
        <p className="description">{strDescriptionEN}</p>
      </div>

{/* SOCIAL */}
      <div className="social">
        <a href={strFacebook}><img src={facebook} alt="" /></a>
        <a href={strTwitter}><img src={twitter} alt="" /></a>
        <a href={strYoutube}><img src={youtube} alt="" /></a>
      </div>
    </div>
  );
};

export default LeagueDetail;
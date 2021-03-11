import { Link } from 'react-router-dom';
import './League.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
library.add(faArrowRight)

const League = (props) => {

  // IMAGE
  const [img, setImg] = useState({})
  const { img1 } = img;

  // DESTRUCTOR
  const { idLeague, strLeague, strSport } = props.league;

  // API
  useEffect(() => {
    fetch('https://api.mocki.io/v1/8ca49d60')
      .then(res => res.json())
      .then(data => setImg(data[0]))
  }, [])

  return (

    <div className="style">

      {/* CARD DATA */}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img1} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{strLeague}</h5>
            <p className="card-text">Sports type: {strSport}</p>
            <Link to={`/about/${idLeague}`}><button className="btn btn-danger">Explore <FontAwesomeIcon icon="arrow-right" /></button></Link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>

  );
};

export default League;
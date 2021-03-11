import React from 'react';
import './Gender.css'

const Gender = (props) => {
  // console.log(props.gender);
  const {gender} = props;
  return (

    // GENDER
    <div>
      {
        gender ?
<img className="gender-img" src="https://i.ibb.co/qJrn3p0/female.png" alt=""/>
:
<img className="gender-img" src="https://i.ibb.co/THBx9kR/male.png" alt=""/>
        }
    </div>
  );
};

export default Gender;
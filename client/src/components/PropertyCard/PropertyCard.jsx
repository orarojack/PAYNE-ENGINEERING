import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <h2>Engineers Trainers</h2>
      <img src="/image-7.jpeg" alt="home" />
      <span className="secondaryText r-price">
        {/* <span style={{ color: "orange" }}>$</span> */}
        {/* <span>{card.price}</span> */}
      </span>
      <h2>Satelite Installation</h2>
      <img src="/image-9.jpeg" alt="home" />
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
    </div>
    
  );
};

export default PropertyCard;
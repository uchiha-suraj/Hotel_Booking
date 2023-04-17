import React, { useEffect } from 'react'
import {
  HotelSection,
  HotelWrapper,
  HotelTitle,
  HotelAddress,
  HotelDistance,
  HotelPriceHighlight,
  HotelDetails,
  HotelDetailsPrice,
  HotelDetailsTexts
} from './Hotel.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Hotel = () => {  
  const hotel = useSelector((state) => state.hotel.data);  
  return (
    <HotelSection>
      <HotelWrapper>
        <img src = {hotel.image} alt="" style={{borderRadius: "5px", objectFit: "cover", height: "200px"}} />
        <HotelTitle>{hotel.name}</HotelTitle>
        <HotelAddress>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{hotel.location}</span>
        </HotelAddress>
        <HotelDistance>
          Excellent location – 500m from center
        </HotelDistance>
        <HotelPriceHighlight>
          Book a stay over {hotel.price} rupees at this property and get a free airport taxi
        </HotelPriceHighlight>
        <HotelDetails>
          <HotelDetailsTexts>
            <h1 style = {{fontSize: '24px'}}>Stay in the heart of City</h1>
            <p style = {{fontSize: '14px', marginTop: '20px'}}>
              {hotel.description}
            </p>
          </HotelDetailsTexts>
          <HotelDetailsPrice>
            <h1 style = {{fontSize: '18px', color: '#555'}}>Perfect for a 9-night stay!</h1>
            <span style = {{fontSize: '14px'}}>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2 style = {{fontWeight: '300'}}>
              <b>{hotel.price * 9}</b> (9 nights)
            </h2>
            <button style={{
              border: 'none',
              padding: '10px 20px',
              backgroundColor: '#0071c2',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '5px',
            }}>Reserve or Book Now!</button>
          </HotelDetailsPrice>
        </HotelDetails>
      </HotelWrapper>
    </HotelSection>
  );
};

export default Hotel;

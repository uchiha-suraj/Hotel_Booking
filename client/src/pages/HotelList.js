import React, { useEffect, useState } from 'react'
import SearchItem from '../components/SearchedItem/SearchedItem';
import { useDispatch, useSelector } from 'react-redux';

function HotelList() {
  const city = useSelector((state) => state.hotels.hotels);
  const hotels = useSelector((state) => state.hotelList.data);
  const hotelsFilteredByCity = hotels?.filter((hotel) => hotel.location.includes(city));

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{color: 'gray'}}>Available Hotels in {city}</h2>
      {
        hotelsFilteredByCity?.map((hotelData, index) => {
          return (
            <div index={index} style={{marginTop: "10px", width: "80%"}}>
              <SearchItem hotelData={hotelData} />
            </div>
          )
        })
      }
    </div>
  )
}

export default HotelList
import React from 'react'
import SearchItem from '../../components/SearchedItem/SearchedItem';
import { useSelector } from 'react-redux';
import {HotelByCitySection, HotelByCityHeading, HotelByCityDiv} from './HotelByCity.styled';

const HotelByCity = () => {
  const city = useSelector((state: any) => state.hotels.hotels);
  const hotels = useSelector((state: any) => state.hotelList.data);
  const hotelsFilteredByCity = hotels?.filter((hotel: any) => hotel.location.includes(city));

  return (
    <HotelByCitySection>
      <HotelByCityHeading>{hotelsFilteredByCity?.length} Hotels are Available in {city} 🤩</HotelByCityHeading>
      {
        hotelsFilteredByCity?.map((hotelData: any, index: any) => {
          return (
            <HotelByCityDiv key={index}>
              <SearchItem hotelData={hotelData} />
            </HotelByCityDiv>
          )
        })
      }
    </HotelByCitySection>
  )
}

export default HotelByCity
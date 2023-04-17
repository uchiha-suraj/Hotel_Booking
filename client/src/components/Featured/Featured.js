import React from 'react'
import {FeaturedSection, FeaturedItem, FeaturedTitles, FeaturedImg} from './Featured.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsByCity } from '../../redux/actions';

const cities = [
  {
    name: "Delhi",
    properties: 123,
    image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mumbai",
    properties: 533,
    image: "https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bangalore",
    properties: 532,
    image: "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Featured = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <FeaturedSection>
      {cities.map((city, index) => {
        return (
          <FeaturedItem 
            key = {index} 
            onClick={(e) => {dispatch(hotelsByCity(city.name)); navigate("/hotel-list")}}
            >
            <FeaturedImg
              src={city.image}
              alt=""
            />
            <FeaturedTitles>
              <h1>{city.name}</h1>
              <h2>{city.properties} properties</h2>
            </FeaturedTitles>
          </FeaturedItem>
        )
      })}
    </FeaturedSection>
  );
};

export default Featured;

import React from 'react';
import Slider from "react-slick";
import {FeaturedSection, FeaturedItem, FeaturedTitles, FeaturedImg} from './Featured.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsByCity } from '../../redux/actions';
import { fetchHotelList } from '../../redux/slice/hotelList';
import {ThunkDispatch} from "@reduxjs/toolkit";

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
  {
    name: "Kolkata",
    properties: 300,
    image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/01/25135425/Untitled-design-13-1-1600x900.jpg",
  },
  {
    name: "Chennai",
    properties: 230,
    image: "https://content.r9cdn.net/rimg/dimg/0b/a6/b99dc19c-city-13827-164946c677a.jpg?crop=true&width=1020&height=498",
  },
  {
    name: "Hyderabad",
    properties: 430,
    image: "https://cdn.siasat.com/wp-content/uploads/2021/10/Charminar-in-Hyderabad.jpg",
  },
  {
    name: "Pune",
    properties: 100,
    image: "https://www.financialexpress.com/wp-content/uploads/2022/06/Hinjewadi-RG-IT-park.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const Featured = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  return (
    <FeaturedSection>
      <Slider {...settings}>
      {cities.map((city, index) => {
        return (
          <FeaturedItem 
            key = {index} 
            onClick={() => {dispatch(hotelsByCity(city.name)); navigate("/hotel-list")}}
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
      </Slider>
    </FeaturedSection>
  );
};

export default Featured;


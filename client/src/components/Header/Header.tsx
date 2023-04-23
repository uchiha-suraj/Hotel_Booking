import React, { useEffect, useState } from 'react';
import { HeaderSection, HeaderContainer, HeaderTitle, HeaderSearch, HeaderSearchItem, HeaderBtn, HeaderSearchInput, DataResult, DataItem } from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelList } from '../../redux/slice/hotelList';
import { fetchHotel } from '../../redux/slice/hotel';
import {ThunkDispatch} from "@reduxjs/toolkit";

const Header = () => {
  const [value, setValue] = useState("");
  const [sid, setSid] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const data = useSelector((state: any) => state?.hotelList?.data);
  
  const handleSearch = (searchId: any) => {
    dispatch(fetchHotel(searchId));
    setTimeout(() => {
      navigate("/hotel-details");
    }, 500);
    
  };

  const handleFilter = (event: { target: { value: any; }; }) => {
    const searchWord = event.target.value;
    setValue(searchWord);
    const newFilter = data.filter((value: { name: string; }) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderTitle>Book a FabHotel - Choose from 1000+ Budget Hotels in India</HeaderTitle>
        <HeaderSearch>
          <HeaderSearchItem>
            <HeaderSearchInput
              type="text"
              value={value}
              placeholder="Enter City, Locality or Landmark"
              onChange={handleFilter}
            />
          </HeaderSearchItem>
          <HeaderSearchItem>
            <HeaderBtn onClick={() => handleSearch(sid)}>
              Search
            </HeaderBtn>
          </HeaderSearchItem>
        </HeaderSearch>
        {filteredData.length != 0 && (
          <DataResult>
            {filteredData.slice(0, 15).map((value: any, key: any) => {
              return (
                <DataItem key={key} onClick={() => {setValue(value.name); setSid(value._id);}}>
                  <p style = {{marginLeft: '10px', fontSize: '20px'}}>{value.name}</p>
                </DataItem>
              );
            })}
          </DataResult>
        )}
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
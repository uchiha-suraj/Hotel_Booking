import React, { useEffect, useState } from 'react';
import {
  faBed,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderSection, HeaderContainer, HeaderList, HeaderListItem, HeaderTitle, HeaderSearch, HeaderSearchItem, HeaderBtn, HeaderSearchInput, DataResult, DataItem } from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelList } from '../../redux/slice/hotelList';
import { fetchHotel } from '../../redux/slice/hotel';

const Header = () => {
  const [value, setValue] = useState("");
  const [sid, setSid] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.hotelList?.data);

  console.log("data = ", data);
  

  const handleSearch = (searchId) => {
    console.log("search----id :: ", searchId);
    dispatch(fetchHotel(searchId));
    setTimeout(() => {
      navigate("/hotel-details");
    }, 800);
    
    console.log("Search :: ", searchId);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setValue(searchWord);
    const newFilter = data.filter((value) => {
      console.log("vvvv ", value.name);
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    dispatch(fetchHotelList());
  }, [])
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderList>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span><Link to="/">Home</Link></span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <Link to="/hotel-list">Find Hotels</Link>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </HeaderListItem>
        </HeaderList>

        <HeaderTitle>Book a FabHotel - Choose from 1000+ Budget Hotels in India</HeaderTitle>
        <HeaderSearch>
          <HeaderSearchItem>
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
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
            {filteredData.slice(0, 15).map((value, key) => {
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
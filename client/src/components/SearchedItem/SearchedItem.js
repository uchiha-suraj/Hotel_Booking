import React from 'react'
import {
  SearchItemSection,
  SiImg,
  SiDesc,
  SiTitle,
  SiDistance,
  SiTaxiOp,
  SiSubtitle,
  SiFeatures,
  SiCancelOp,
  SiCancelOpSubtitle,
  SiDetails,
  SiRating,
  SiDetailTexts,
  SiPrice,
  SiTaxOp,
  SiCheckButton
} from './SearchedItem.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchHotel } from '../../redux/slice/hotel';

const SearchItem = (hotelData) => {
  const {_id, name, location, description, image, price} = hotelData?.hotelData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHotel = () => {
    dispatch(fetchHotel(_id));
    setTimeout(() => {
      navigate("/hotel-details");
    }, 800);
  };

  return (
    <SearchItemSection>
      <SiImg
        src={image}
        alt=""
      />
      <SiDesc>
        <SiTitle>{name}</SiTitle>
        <SiDistance>{location}</SiDistance>
        <SiTaxiOp>Free airport taxi</SiTaxiOp>
        <SiSubtitle>
          Studio Apartment with Air conditioning
        </SiSubtitle>
        <SiFeatures>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </SiFeatures>
        <SiCancelOp>Free cancellation </SiCancelOp>
        <SiCancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </SiCancelOpSubtitle>
      </SiDesc>
      <SiDetails>
        <SiDetailTexts>
          <SiPrice>₹{price}</SiPrice>
          <SiTaxOp>Includes taxes and fees</SiTaxOp>
          <SiCheckButton onClick={handleHotel}>See availability</SiCheckButton>
        </SiDetailTexts>
      </SiDetails>
    </SearchItemSection>
  );
};

export default SearchItem;

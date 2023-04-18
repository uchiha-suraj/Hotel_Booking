import styled from 'styled-components';

export const HotelSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
export const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
export const HotelTitle = styled.h1`
  font-size: 24px;  
  color: #3C487B;
`;
export const HotelAddress = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
export const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;
export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const HotelDetailsTexts = styled.div`
  flex: 3;
`;

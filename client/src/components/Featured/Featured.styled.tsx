import styled from 'styled-components';

export const FeaturedSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;
  gap: 20px;
  z-index: 1;
`;
export const FeaturedItem = styled.div`
  position: relative;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex:1
`;
export const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

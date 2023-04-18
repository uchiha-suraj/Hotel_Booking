import styled from 'styled-components';

export const SearchItemSection = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;
export const SiImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
export const SiDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
export const SiTitle = styled.h1`
  font-size: 25px;
  color: #3C487B;
`;
export const SiDistance = styled.span`
  font-size: 20px;
`;
export const SiTaxiOp = styled.span`
  font-size: 14px;
  background-color: #FCD513;
  color: black;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
export const SiSubtitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
export const SiFeatures = styled.span`
  font-size: 14px;
`;
export const SiCancelOp = styled.span`
  font-size: 14px;
  color: #3C487B;
  font-weight: bold;
`;
export const SiCancelOpSubtitle = styled.span`
  font-size: 14px;
  color: #3C487B;
`;
export const SiDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between
`;
export const SiRating = styled.div`
  display: flex;
  justify-content: space-between
`;
export const SiDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 5px;
`;
export const SiPrice = styled.span`
  font-size: 24px;
`;
export const SiTaxOp = styled.span`
  font-size: 14px;
  color: gray;
`;
export const SiCheckButton = styled.button`
  background-color: #3C487B;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;


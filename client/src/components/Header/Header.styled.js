import styled from 'styled-components';

export const HeaderSection = styled.div`
  background-color: #3C487B;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
export const HeaderTitle = styled.h1`

`;
export const HeaderSearch = styled.div`
  margin-top: 40px;
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-radius: 5px;
  width: 100%;
`;
export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const HeaderBtn = styled.button`
  background-color: #3C487B;
  color: white;
  height: 50px;
  width: 105px;
  font-weight: 500;
  font-size: 20px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 885px;
`;
export const DataResult = styled.div`
  position: relative;
  display: inline-block;
  width: 90%;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
  &:-webkit-scrollbar {
    display: none;
  }
`;
export const DataItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;




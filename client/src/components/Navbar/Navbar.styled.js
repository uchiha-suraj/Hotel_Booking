import styled from 'styled-components';

export const NavSection = styled.div`
  height: 70px;
  background-color: #3C487B;
  display: flex;
  justify-content: center;
`;
export const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.span`
  font-weight: 500;
  font-size: 30px;
`;
export const NavItems = styled.div`

`;
export const NavButton = styled.button`
  margin-left: 20px;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  height: 40px;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
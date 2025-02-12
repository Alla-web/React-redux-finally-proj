import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import Background from '../../assets/foto/background.png'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${Background})  no-repeat center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  width: 100%;
  height: fit-content;
  background-color: rgba(18, 45, 77, 0.5);
  color: rgba(255, 255, 255, 0.1); 
`;

export const LogoTitleContainer = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const HeaderLogoContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const AppTitle = styled.h2`
font-size: 24px;
font-weight: bold;
color: white;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 63px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 200px;

`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background-color: rgba(18, 45, 77, 0.5);
  color: rgba(255, 255, 255, 0.1);
  /* background-color: #2f5a6e; */
  color: white;
`;

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;
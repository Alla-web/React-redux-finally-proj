import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./types"
import {
    AppTitle,
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
  LayoutContainer,
  LogoTitleContainer,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles"
import Logo from "../../assets/foto/logo.png"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => navigate("/")

  return (
    <LayoutContainer>
      <Header>
        <LogoTitleContainer>
        <HeaderLogoContainer
          onClick={() => {
            navigate("/")
          }}
        >
          <HeaderLogo src={Logo} />         
        </HeaderLogoContainer>
        <AppTitle>Weather App</AppTitle>
        </LogoTitleContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/history"
          >
            History
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      {/* <Footer></Footer> */}
    </LayoutContainer>
  )
}

export default Layout

import theme from '~/styles/theme'
import styled from "styled-components"
import Logo from "./Logo"
import Nav from './Nav'

const Navbar = () => {
  return (
      <Header>
        <Logo/>
        <Nav/>
      </Header>
  )
}

const Header = styled.header`
  align-items: center;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  justify-content: space-around; 

  @media (max-width: 414px) {
    bottom: 0;
    height: auto;
    padding: 3px 0;
    position: fixed;
    width: 100%;

    img {
      display: none;
    }
  }
`
export default Navbar
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
    height: 80px;
    position: fixed;
    width: 100%;
  }
`
export default Navbar
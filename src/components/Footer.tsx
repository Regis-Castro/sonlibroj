import theme from '~/styles/theme'
import styled from "styled-components"
import Socials from './Socials'

const Footer = () => {
  return (
      <Bottom>
        <div>
          <Socials/>
          <p>&copy; 2024 Ĉiuj rajtoj rezervitaj</p>
        </div>
      </Bottom>
  )
}

const Bottom = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  font-size: 1.4rem;
  height: 65px;
  text-align: center;
  width: 100%;

  div {
    line-height: 20px;
    padding: 4px 0 0;
  }

  .icon {
    color: ${theme.colors.background};
    margin: 0 5px;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 414px) {
    display: none;
  }
`
export default Footer
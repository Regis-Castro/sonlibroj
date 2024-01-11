import theme from '~/styles/theme'
import styled from "styled-components"

const Footer = () => {
  return (
      <Bottom>
        <p>&copy; 2024 Ĉiuj rajtoj rezervitaj</p>
      </Bottom>
  )
}

const Bottom = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  font-size: 1.4rem;
  height: 65px;
  line-height: 65px;
  text-align: center;
  width: 100%;

  @media (max-width: 414px) {
    display: none;
  }
`

export default Footer
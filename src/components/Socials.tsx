import styled from 'styled-components'
import theme from '~/styles/theme'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { socialIcons } from '~/utils/data'

const Socials = () => {
  return (
    <SocialIcons>
      {socialIcons.map((icon, iconIndex) => (
          <Link key={iconIndex} href={icon.link} target="_blank">
            <Icon className="icon" icon={icon.iconLink} width="27"/>        
          </Link>
      ))}
    </SocialIcons>
  )
}

const SocialIcons = styled.div`
  .icon {
    color: ${theme.colors.primary};
    margin: 0 5px;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export default Socials
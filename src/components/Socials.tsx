import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { socialIcons } from '~/utils/data'

const Socials = () => {
  return (
    <>
      {socialIcons.map((icon, iconIndex) => (
          <Link key={iconIndex} href={icon.link} target="_blank">
            <Icon className="icon" icon={icon.iconLink} width="27"/>        
          </Link>
      ))}
    </>
  )
}

export default Socials
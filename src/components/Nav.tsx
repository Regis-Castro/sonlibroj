import theme from '~/styles/theme'
import styled from "styled-components"
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { menuItems } from '~/utils/data'

const Nav = () => {
  return (
      <Navigation>
        <ul>
          {menuItems.map((item) => (
            <>
              <li key={item.id}>
                {/* <Link href={item.link}><Icon className="icon" icon={item.iconLink} width="20"/></Link>
                <Link href={item.link}>{item.name}</Link> */}

                <Link href={item.link}>
                <Icon className="icon" icon={item.iconLink} width="20"/>
                {item.name}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </Navigation>
)}

const Navigation = styled.nav`
  width: 422px;

  @media (max-width: 414px) {
    order: -1;
    padding: 0 10px;
  }

  ul {
    display: flex;
    font-size: clamp(1.6rem, 4vw, 1.8rem);
    justify-content: space-between;

    @media (max-width: 414px) {
      justify-content: space-evenly;
    }
  }

  li {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 56px;
    list-style-type: none;
  }

  .icon {
    display: none;
    margin: auto;

    @media (max-width: 414px) {
      display: block;
    }
  }

  a {
    color: ${theme.colors.background};
    text-decoration: none;
  }

  a:hover {
    color: ${theme.colors.secondary};

    @media (max-width: 414px) {
      color: ${theme.colors.background};
    }
  }

`

export default Nav
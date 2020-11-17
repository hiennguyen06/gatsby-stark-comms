import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Services",
    url: "/services/",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact/",
  },
]

const NavLinksStyles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    margin-left: 3.2rem;
  }
  a {
    font-size: 2rem;
    font-weight: 400;
    color: var(--white);
  }
  @media (max-width: 900px) {
    display: none;
  }
`

const NavLinks = () => {
  return (
    <NavLinksStyles>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </NavLinksStyles>
  )
}

export default NavLinks

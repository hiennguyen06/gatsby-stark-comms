import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import NavLinks from "./navLinks"
// Styled Components
import { Container, Flex } from "../styles/GlobalStyles"

const HeaderNav = styled(motion.div)`
  height: 76px;
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Menu = styled.div`
  display: none;
  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: var(--white);
      margin: 8px;
    }
  }
  @media (max-width: 900px) {
    display: block;
  }
`
const Logo = styled.div`
  a {
    font-size: 4.8rem;
    font-family: FormulaCondensed;
    color: var(--white);
  }
`
const Header = () => {
  return (
    <HeaderNav
    // animate={{ y: 0, opacity: 1 }}
    // initial={{ y: -72, opacity: 0 }}
    // transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween withHeight>
          <Logo>
            <Link to="/">stark.</Link>
          </Logo>
          <NavLinks />
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header

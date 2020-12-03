import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { BsArrowDownShort } from "react-icons/bs"

import background from "../assets/images/about-banner.jpg"

// Styled Components
import { Container, Flex } from "../styles/GlobalStyles"

const AboutHeroStyles = styled.div`
  background-image: url(${background});
  background-position: top center;
  background-size: cover;
  background-repeat: repeat-y;
  width: 100%;
  height: calc(100vh - 76px);
`

const BannerContent = styled(motion.div)`
  padding: 8rem;
  text-align: center;

  p {
    color: var(--white);
    font-size: 4rem;
    line-height: 1.4;
    font-weight: 700;
  }

  .goto-button {
    color: var(--red);
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 50%;
    bottom: 10%;
    transform: translateX(50%);
  }
  .icon {
    font-size: 4rem;
    color: var(--red);
  }
`

const AboutHero = ({ aboutHeroData }) => {
  return (
    <AboutHeroStyles>
      <Container>
        <Flex withHeight>
          <BannerContent
            className="banner-content"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <p>{aboutHeroData.description}</p>
            <Link to="/">
              <div className="goto-button">
                {aboutHeroData.button}
                <span>
                  <BsArrowDownShort className="icon"></BsArrowDownShort>
                </span>
              </div>
            </Link>
          </BannerContent>
        </Flex>
      </Container>
    </AboutHeroStyles>
  )
}

export default AboutHero

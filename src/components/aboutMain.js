import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

// Styled Components
import { Container, Flex } from "../styles/GlobalStyles"

const AboutMainStyles = styled(motion.div)`
  width: 100%;
  background: #f6f6f6;
`
const MainContent = styled(motion.div)`
  .content-description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    padding: 16rem 8rem;

    p {
      font-size: 2rem;
    }
  }
`

const AboutMain = ({ aboutMainData }) => {
  const contents = aboutMainData.contents

  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <AboutMainStyles>
      <Container>
        <Flex>
          <MainContent
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 72 },
            }}
          >
            <div className="content-description">
              <p className="bold">{contents[0].description}</p>
              <p>{contents[1].description}</p>
            </div>
          </MainContent>
        </Flex>
      </Container>
    </AboutMainStyles>
  )
}

export default AboutMain

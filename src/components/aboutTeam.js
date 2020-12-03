import React, { useEffect } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

// Styled Components

const AboutTeamStyles = styled.div`
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .mel-desc {
    padding: 4rem 16rem 4rem 4rem;
    h1 {
      color: var(--black);
      font-weight: 700;
      margin-bottom: 2rem;
    }
    p {
      font-size: 2rem;
      color: var(--black);
    }
  }
`
const query = graphql`
  {
    file(relativePath: { eq: "mel-profile-1x1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AboutTeam = ({ aboutTeamData }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

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
    <AboutTeamStyles>
      <div class="container-grid">
        <Image fluid={fluid} />
        <motion.div
          className="mel-desc"
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
          <h1>{aboutTeamData.title}</h1>
          <p>{aboutTeamData.description}</p>
        </motion.div>
      </div>
    </AboutTeamStyles>
  )
}

export default AboutTeam

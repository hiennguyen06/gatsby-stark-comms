import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// components
import AboutHero from "../components/aboutHero"
import AboutMain from "../components/aboutMain"
import AboutTeam from "../components/aboutTeam"
import ContactSection from "../components/contactSection"

// Styled Components
import Layout from "../components/layout"

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        header {
          button
          description
          id
          title
        }
        main {
          id
          contents {
            description
            id
          }
        }
        team {
          title
          description
          id
        }
      }
    }
  }
`

const About = ({ data }) => {
  const aboutHeroData = data.allStrapiAbout.nodes[0].header
  const aboutMainData = data.allStrapiAbout.nodes[0].main
  const aboutTeamData = data.allStrapiAbout.nodes[0].team
  console.log(aboutTeamData)
  return (
    <Layout>
      <AboutHero aboutHeroData={aboutHeroData} />
      <AboutMain aboutMainData={aboutMainData} />
      <AboutTeam aboutTeamData={aboutTeamData} />
      <ContactSection />
    </Layout>
  )
}

export default About

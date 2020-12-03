import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Styled Commponents
import { Container, Flex } from "../styles/GlobalStyles"

const ContactSectionStyles = styled.div`
  background: var(--red);
  .contact-section-content {
    text-align: center;
    padding: 10rem 8rem;
    p {
      font-size: 4rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 3.2rem;
    }
    .contact-section-btn {
      cursor: pointer;
      border: 2px solid #fff;
      outline: none;
      background: transparent;
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--white);
      padding: 1.6rem 2.4rem;
      border-radius: 50px;
      transform-origin: center;
      text-transform: uppercase;
      transition: all 0.25s;
      &:hover {
        color: var(--red);
        background: var(--white);
      }
    }
  }
`

const ContactSection = () => {
  return (
    <ContactSectionStyles>
      <Container>
        <Flex center withHeight>
          <div className="contact-section-content">
            <p>
              Looking to grow your reach, reputation and communication
              activities?
            </p>
            <Link to="/">
              <button type="button" className="contact-section-btn">
                contact us
              </button>
            </Link>
          </div>
        </Flex>
      </Container>
    </ContactSectionStyles>
  )
}

export default ContactSection

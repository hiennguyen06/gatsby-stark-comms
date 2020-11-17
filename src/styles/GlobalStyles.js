import styled, { css, createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  :root {
    --red: #FF3437;
    --blue: #0A2E9E;
    --black: #000;
    --white: #FFFFFF;
  }
  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    font-size: 10px;
  }
  body {
    overscroll-behavior: none;
    overflow-x: hidden;
  }
  li {
    list-style: none;
  }
`
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 20px;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${props =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
  ${props =>
    props.withHeight &&
    css`
      height: 100%;
    `}
`

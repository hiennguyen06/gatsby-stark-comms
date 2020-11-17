import React from "react"

// Components
import Header from "../components/header"

// Styled Components
import Typography from "../styles/Typography"
import { GlobalStyles } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

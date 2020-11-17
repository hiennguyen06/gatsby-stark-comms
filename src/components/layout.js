import React from "react"

// Styled Components
import Typography from "../styles/Typography"
import { GlobalStyles } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {children}
    </>
  )
}

export default Layout

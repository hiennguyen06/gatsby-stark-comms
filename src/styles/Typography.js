import { createGlobalStyle } from "styled-components"

import font from "../assets/fonts/FormulaCondensed-Bold.woff2"

const Typography = createGlobalStyle`

    @font-face {
        font-family: FormulaCondensed;
        src: url(${font});
    }
    html {
        font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
        color: var(--black);
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
    }
    p {
        font-weight: 400;
        line-height: 1.5;
    }
    .bold {
        font-weight: 700;
    }
`
export default Typography

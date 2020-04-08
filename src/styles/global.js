import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: ${colors.primary};
  }
`

export default GlobalStyles

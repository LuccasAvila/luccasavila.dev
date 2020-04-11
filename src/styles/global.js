import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
import separator from '../../static/assets/images/separator.png'
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
    ${media.lessThan('medium')`
      font-size: 12px;
    `}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  hr {
    border: none;
    width: 100%;
    height: 10px;
    background: url(${separator}) no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-position: center;
    margin: 16px 0;
  }
`

export default GlobalStyles

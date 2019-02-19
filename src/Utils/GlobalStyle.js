import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import theme from './Theme'

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${theme.fontSystem};
        font-size: ${theme.typeScale[4]};
        color: ${theme.colors.text01};
    }
`

export default GlobalStyle
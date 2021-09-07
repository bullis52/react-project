import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

div {

background: ${({theme}) => theme.div}
}
div{
    color: ${({theme}) => theme.text};
}
div{
  transition: all 0.50s linear 
}
// transition: all 0.50s linear`


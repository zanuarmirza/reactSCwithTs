import styled, { css } from 'styled-components'

interface IStyleProp {
    primary: boolean
  }
const Button = styled<IStyleProp,any>("button")`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `} 
`
export default Button;
;
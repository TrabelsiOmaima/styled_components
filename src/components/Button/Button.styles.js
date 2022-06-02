

import styled,  { keyframes }  from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  //4.  selon action , props
  background-color: ${ (props) => 
    props.variant === 'outline' ? '#FFF' : '#4caf50'} ;
  color: ${ (props) => 
    props.variant === 'outline' ? '#4caf50' : '#FFF'} ;
  padding: 15px 32px;
  text-align: centre;
  text-decoration: none;
  display: inline-block;
  font-size: 16px ;
  cursor: pointer;
  transition: 0.5s all ease-out;
  //6. pseudo classes :
  &:hover {
    background-color: ${ (props) => 
    props.variant !== 'outline' ? '#FFF' : '#4caf50'} ;
  color: ${ (props) => 
    props.variant !== 'outline' ? '#4caf50' : '#FFF'} ;
  }
`
//5.extending styles
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`

//7. att + props
export const SubmitButton = styled(StyledButton).attrs({
  type: 'submit'
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${props =>
      props.variant !== 'outline' ? '#FFF' : '#4caf50'};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

//8. animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
` 
export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`


//9. theming
export const DarkButton = styled(StyledButton)`
  border: 2px solid ${props => props.theme.dark.primary};
  background-color: ${props => props.theme.dark.primary};
  color: ${props => props.theme.dark.text};
`




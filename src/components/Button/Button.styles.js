

import styled from 'styled-components';

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




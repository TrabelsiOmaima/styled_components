

import './App.css';
import logo from './logo.svg'
import './styles.css'
import StyledButton, { FancyButton, SubmitButton}from './components/Button/Button';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles'

//9.theming
const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  //10.global style 
  fontFamily: 'Segoe UI'
}


//10. global style
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`


function App() {
  return (
    <ThemeProvider theme={theme} >
      < GlobalStyle />
    <div className="App">
       <AnimatedLogo src={logo}/>

       <StyledButton type='submit'>Styled Button</StyledButton>
       <div> <br /> </div>

       <StyledButton variant='outline'>Styled Button</StyledButton>
       <div> <br /> </div>

       <FancyButton as='a' >Fancy Button</FancyButton>
       <div> <br /> </div>

       <SubmitButton>Submit </SubmitButton>
       <div> <br /> </div>

       <DarkButton>Drak Button</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;

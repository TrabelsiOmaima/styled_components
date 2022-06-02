

import './App.css';
import logo from './logo.svg'
import './styles.css'
import StyledButton, { FancyButton, SubmitButton}from './components/Button/Button';
import { ThemeProvider } from 'styled-components';
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
  fontFamily: 'Segoe UI'
}



function App() {
  return (
    <ThemeProvider theme={theme} >
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

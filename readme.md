# 1. intro : 
+ ui styled components orienté react /react native to styled components...
+ v. captures

# 2. installation :
+ create nv projet react : npx create-react-app styled-components-demo 
+ install extension : vscode-styled-components
+ install styled-components package : yarn add styled-components


# 3. Basic styled components :
+ Basics of create and organise a styled componnets
+ exmpl : styled button html element

> Button.styles.js //export const StyledButton = styled.button`.....`
> Button.js // import / export "StyledButton"
> app.js // import , use / <StyledButton>Styled Button</StyledButton>

# 4. using props :
+ diff actions = diff style (the same elemnt)
+ style for each action 
+ used the same styled component , and adapt it selon props

> Button.styles.js //
  background-color: ${ (props) => 
    props.variant === 'outline' ? '#FFF' : '#4caf50'} ;
    ....

> Button.js // 
> app.js //add variant props l 2ém button
       <StyledButton variant='outline'>Styled Button</StyledButton>


# 5.extending styles :
+ props is one way to adapte styled components
+ extending is second way to do this
 
> Button.styles.js //
  export const FancyButton = styled(StyledButton)`
  ...
`

> Button.js // import + export {FancyButton};

> app.js // a hors ,ancre tag    
<FancyButton as='a' >Fancy Button</FancyButton>

# 6. Pseudo classes :
like hover
y'a bcq des classes : active, checked, foxes, before, aftre, firstline, firstletter...etc
> styledcomponent>
  &:hover {}
  
  
# 7.passed props and adding attributes :
 + add attribute ema mch fl props f styled function
 > button.styles.js >


# 8. animations :
# ------
yarn start
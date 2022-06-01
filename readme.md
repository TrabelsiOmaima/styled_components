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


# ------
yarn start
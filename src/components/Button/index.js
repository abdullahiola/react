import React from 'react'
import { ButtonContainer } from './ButtonStyles';

// const STYLES = [
//   "btn--main",
//   "btn-main-outline"
// ]

// const SIZES = [
//   "btn-sm",
//   "btn-md", 
// ]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    size,
}) => {


  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button;

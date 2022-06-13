import React from 'react'
import { Container, ImageContainer, ButtonContainer, DivButton} from './footerComponent.style'
import HoldingHands from '../../assets/images/image.svg'

const index = () => {
  return (
    <>
    <Container>
        <ImageContainer>
            <img src={HoldingHands} alt='refer' />
        </ImageContainer>
        <ButtonContainer>
            <p>Refer a friend and get <span>10%</span> discount on your first purchase</p>
        <DivButton>
            <div>
            Get started
            </div>
        </DivButton>
        </ButtonContainer>
    </Container>
    </>
  )
}

export default index
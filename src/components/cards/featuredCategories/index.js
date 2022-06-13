import React from 'react'
import { Col } from 'react-bootstrap'
import {
  FCardWrapper,
  FCardTitle,
  FCardImg,
  FCardImgWrap,
  FCardStyledContainer,
  StyledRow,
  FCardTextWrapper,
} from './FeaturedCategoriesStyle'

const FeaturedCategories = ({ id, title, img, alt, color }) => {
  return (
    <>
      <FCardStyledContainer key={id}>
        <FCardWrapper style={{ backgroundColor: `${color}` }}>
          <StyledRow>
            <Col xs lg="6">
              <FCardTextWrapper>
                <FCardTitle>{title}</FCardTitle>
              </FCardTextWrapper>
            </Col>
            <Col xs lg="6">
              <FCardImgWrap>
                <FCardImg src={img} alt={alt} />
              </FCardImgWrap>
            </Col>
          </StyledRow>
        </FCardWrapper>
      </FCardStyledContainer>
    </>
  )
}

export default FeaturedCategories

import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const PCardStyledContainer = styled(Container)`
  max-width: 210px;
  margin: 2rem 0.5rem;
  padding: 0;

  @media (max-width: 500px) {
    width: 150px;
  }
`

export const PCardWarapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e0e0;
  border-radius: 15px;

  @media (max-width: 500px) {
    border-radius: 12px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export const PCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 0;

  @media (max-width: 500px) {
    margin-top: 8px;
  }
`

export const PCardDiscount = styled.div`
  padding: 0 8px;
  background-color: #fd6e6e;
  border-radius: 0px 25px 25px 0px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0 4px;
    border-radius: 0 10px 10px 0;
  }
`

export const Discount = styled.h5`
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  padding: 5px;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 8px;
    padding: 2px;
  }
`

export const PCardLike = styled.div`
  font-size: 25px;
  color: #5d84c1;
  margin-right: 15px;

  @media (max-width: 500px) {
    font-size: 15px;
    margin-right: 10px;
  }
`

export const PCardImgCover = styled.div`
  margin-top: 10px;
  overflow: hidden;
  width: 80%;
  height: 170px;
  margin 0 auto; 

  @media (max-width: 500px) {
    margin-top: 5px;
    height: 100px;
  }
`

export const PCardImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
  background-image: cover no-repeat;

  @media (max-width: 500px) {
    width: 70%;
    height 70%;
  }
`

export const PCardContent = styled.div`
  margin-left: 10px;

  @media (max-width: 500px) {
    margin-left: 8px;
    padding: 0;
    margin-top: -20px;
  }
`

export const PCardCategory = styled.p`
  margin: 7px 0 0 0;
  font-family: var(--font-family-lato);
  font-weight: 400;
  font-size: 10px;
  color: #7e7e7e;

  @media (max-width: 500px) {
    margin: 0;
    font-size: 8px;
  }
`

export const PCardItem = styled.h4`
  margin: 2px 0 0 0;
  font-family: var(--font-family-lato);
  font-weight: 600;
  font-size: 13px;
  color: #253d4e;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`

export const FCardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PCardSellPrice = styled.h2`
  margin: 10px 0 0 0;
  font-family: var(--font-family-quicksand);
  font-weight: 700;
  font-size: 22px;
  color: #5d84c1;

  @media (max-width: 500px) {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
`

export const PCardPriceSlash = styled.span`
  margin: 12px 8px 0 0;
  font-family: var(--font-family-quicksand);
  font-weight: 500;
  font-size: 15px;
  color: #253d4e;
  font-style: italic;
  text-decoration: line-through;

  @media (max-width: 500px) {
    margin: 5px 8px 0 0;
    font-size: 10px;
  }
`

export const PCardWeight = styled.p`
  margin: 0;
  font-family: var(--font-family-lato);
  font-weight: 400;
  font-size: 10px;
  color: #7e7e7e;

  @media (max-width: 500px) {
    font-size: 8px;
  }
`

export const PCardRating = styled.div`
  color: #fdc040;
  opacity: 0.7;

  @media (max-width: 500px) {
    font-size: 8px;
  }
`

export const PCardStarPoint = styled.span`
  color: #7e7e7e;
  margin-left: 10px;
  font-family: var(--font-family-lato);
  font-weight: 400;

  @media (max-width: 500px) {
    margin-left: 5px;
  }
`

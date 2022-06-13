import styled from 'styled-components'

export const FCardStyledContainer = styled.div`
  margin: 10px;
  padding: 0;
  max-width: 400px;

  @media (max-width: 500px) {
    width: 88%;
    margin: 5px;
  }
`

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`

export const FCardWrapper = styled.div`
  margin: 0 5px;
  padding: 5px 30px;
  border-radius: 10px;

  @media (max-width: 500px) {
    margin: 0 3px;
    padding: 2px 15px;
    border-radius: 5px;
  }
`

export const FCardTextWrapper = styled.div`
  margin: 20px 0 0 10px;
  width: 170px;

  @media (max-width: 500px) {
    margin: 12% 0 0 10%;
    width: 60px;
  }
`

export const FCardTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  font-family: var(--font-family-quicksand);

  @media (max-width: 500px) {
    font-size: 12px;
    width: 70%;
    line-height: 15px;
  }
`

export const FCardImgWrap = styled.div`
  padding: 0 2px;
  width: 190px;
  height: 230px;
  margin 0 auto;

  @media (max-width: 500px) {
    width: 80px;
    height: 115px;
  }
`

export const FCardImg = styled.img`
  width: 100%;
  margin-top: 40px;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: 500px) {
    margin-top: 50%;
  }
`

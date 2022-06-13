import styled from 'styled-components'

export const FeaturedCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const PopularCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 1rem;

  @media (max-width: 700px) {
    justify-content: left;
    padding: 1.5rem 0.3rem;
  }
`

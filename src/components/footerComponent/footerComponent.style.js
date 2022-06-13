import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  // height: 120px;
  background: #E0EBEA;
  border-radius: 15px;
  display: flex;
  //justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 556px) {

    grid-template-columns: 1fr;
    height: auto;
    flex-direction: column;
    justify-content: center;
     align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`
;

export const ImageContainer = styled.div`
  width:50%;
  margin-right: 1rem;

  @media screen and (max-width: 850px) {
    width: 80%;
    height: auto;
    margin-right: 0.5rem;
    }
  @media screen and (max-width: 556px) {

    width: 80%;
    height: auto;
    margin-right: initial;
    text-align: center;
    margin: auto;
  }

  img{
    width: 100%;
    height: auto;
  }

`
;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: 1rem;
  align-items: center;
  width: 50%;
 
  @media screen and (max-width: 850px) {
    width: 80%;
    height: auto;
    margin-left: 0.5rem;
    }
    @media screen and (max-width: 696px) {
      width: 95%;
    }
  @media screen and (max-width: 556px) {
    margin-left: 0;
    width: 80%;
    height: auto;
    text-align: center;
    margin: auto;
  }

  p{
      font-family: "Quicksand", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 50.6123px;
      line-height: 61px;
      letter-spacing: -0.0004em;
      color: #1c4037;
      // line-height: 1.7rem;
      margin-bottom: 0.7rem;
      text-align: left;
       
      @media screen and (max-width: 696px) {
        font-size: 1.1rem;
      }
      @media screen and (max-width: 556px) {
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 2rem;
        font-size: 1.2rem;
        width: 100%;
        height: auto;
        text-align: center;
      }
  }
  span{
      color: #ea3942;
  }
`
;

export const DivButton = styled.div`
@media screen and (max-width: 556px) {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
 div{
    border: 2px solid #2e405c;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    color: #ffffff;
    background-color: #5d84c1;
    font-size: 1rem;
    font-family: Quicksand;
    cursor: pointer;
    font-weight: 600;
    line-height: 100%;
    margin-top: 0.5rem;
    display: inline-block;
    width: 40%;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    text-align: center;
 }
`
;





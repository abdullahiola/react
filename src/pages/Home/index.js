import React from 'react'
import { FeaturedCategoriesWrapper, PopularCardsWrapper } from './homeStyles.js'
import Navbar from '../../components/Navbar'
import Footer from '../../components/index'
import FooterContainer from '../../components/MainFooterComponent/index.js'
import FeaturedCategories from '../../components/cards/featuredCategories/index'
import {
  FObjOne,
  FObjTwo,
  FObjThree,
} from '../../components/cards/featuredCategories/Fdata'
import PopularCards from '../../components/cards/popularCards'
import {
  PObjOne,
  PObjTwo,
  PObjThree,
  PObjFour,
  PObjFive,
} from '../../components/cards/popularCards/Pdata'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedCategoriesWrapper>
        <FeaturedCategories {...FObjOne} />
        <FeaturedCategories {...FObjTwo} />
        <FeaturedCategories {...FObjThree} />
      </FeaturedCategoriesWrapper>
            <PopularCardsWrapper>
            <PopularCards {...PObjOne}/>
            <PopularCards {...PObjTwo}/>
            <PopularCards {...PObjThree}/>
            <PopularCards {...PObjThree}/>
            </PopularCardsWrapper>
            <Footer />
  
      <PopularCardsWrapper>
        <PopularCards {...PObjOne} />
        <PopularCards {...PObjTwo} />
        <PopularCards {...PObjThree} />
        <PopularCards {...PObjFour} />
        <PopularCards {...PObjFive} />
      </PopularCardsWrapper>
      <Footer />
      <FooterContainer/>
    </div>
  )
}

export default Home

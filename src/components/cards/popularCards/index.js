import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import {
  PCardWarapper,
  PCardTop,
  PCardDiscount,
  Discount,
  PCardLike,
  PCardImgCover,
  PCardImg,
  PCardContent,
  PCardCategory,
  PCardItem,
  PCardWeight,
  PCardRating,
  PCardStarPoint,
  FCardPrice,
  PCardStyledContainer,
  PCardSellPrice,
  PCardPriceSlash,
} from './PopularCards'

const PopularCards = ({
  id,
  discount,
  likeBtn,
  img,
  alt,
  category,
  item,
  price,
  priceSlash,
  weight,
  rating,
}) => {
  return (
    <>
      <PCardStyledContainer id={id}>
        <PCardWarapper>
          <PCardTop>
            <PCardDiscount>
              <Discount>{discount}</Discount>
            </PCardDiscount>
            <PCardLike>
              <FaHeart likeBtn={likeBtn} />
            </PCardLike>
          </PCardTop>
          <PCardImgCover>
            <PCardImg src={img} alt={alt} />
          </PCardImgCover>
          <PCardContent>
            <PCardCategory> {category}</PCardCategory>
            <PCardItem>{item}</PCardItem>
            <FCardPrice>
              <PCardSellPrice>{price}</PCardSellPrice>
              <PCardPriceSlash>{priceSlash}</PCardPriceSlash>
            </FCardPrice>
            <PCardWeight>{weight}</PCardWeight>
            <PCardRating>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> <PCardStarPoint>({rating})</PCardStarPoint>
            </PCardRating>
          </PCardContent>
        </PCardWarapper>
      </PCardStyledContainer>
    </>
  )
}

export default PopularCards

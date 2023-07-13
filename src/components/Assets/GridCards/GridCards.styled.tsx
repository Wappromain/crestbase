import styled from 'styled-components';

const GridCards = styled.div`
  box-sizing: border-box;
  padding: 17% 3% 7% 3%;

  width: 100%;
  /* height: 400px; */

  background: #ffffff;

  font-weight: 600;
  font-size: 24px;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #333333;
  box-shadow: 0px 0px 50px 2px #0e04040f;
`;

const GridCardsLayout = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  gap: 10%;
  @media screen and (min-width: 1024px) {
    height: 80%;
  }
`;

const CardValueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
`;

const CardIcon = styled.img``;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 10px;
  gap: 16px;
`;

const CardTextHeader = styled.h3`
  font-family: 'Merriweather';
  font-size: 18px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color: #262c55;
`;

const CardTextMessage = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  color: #4f4f4f;
`;

export {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
};

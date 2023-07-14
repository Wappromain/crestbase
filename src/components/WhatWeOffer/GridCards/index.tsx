import React from 'react';
import {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
  CardIconDiv,
  CardIconDownloadButton,
} from './GridCards.styled';

interface GridCardProps {
  iconSrc: string;
  header: string;
  message?: string;
  background: string;
}

const GridCard: React.FC<GridCardProps> = ({ iconSrc, header, message, background }) => {
  return (
    <GridCards style={{ backgroundColor: background }}>
      <GridCardsLayout>
        <CardValueBox>
          <CardText>
            <CardTextHeader>{header}</CardTextHeader>
            <CardTextMessage>{message}</CardTextMessage>
          </CardText>
          <CardIconDiv>
            <CardIconDownloadButton>Download App</CardIconDownloadButton>
            <div style={{ display: 'flex' }}>
              <CardIcon src={iconSrc} alt='' width={'100%'} height={'100%'} />
            </div>
          </CardIconDiv>
        </CardValueBox>
      </GridCardsLayout>
    </GridCards>
  );
};

export default GridCard;

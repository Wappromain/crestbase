import React from 'react';
import {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
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
          <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
            <CardIcon src={iconSrc} alt='' width={'100%'} height={'100%'} />
          </div>
        </CardValueBox>
      </GridCardsLayout>
    </GridCards>
  );
};

export default GridCard;

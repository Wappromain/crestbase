import styled from 'styled-components';

interface StyleProps {
  isActive: boolean;
}

const AccordionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AccordionCards = styled.div`
  box-sizing: border-box;

  width: 100%;
  /* height: 400px; */

  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AccordionCardsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const AccordionTextContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: rgba(61, 121, 239, 0.06);
  border-radius: 2%;
  /* overflow: hidden; */
  max-height: ${({ isActive }) => (isActive ? '500px' : '50px')};
  transition: max-height 1s ease-in;
  /* transition-delay: ${({ isActive }) => (isActive ? '0s' : '1s')}; */
`;

const AccordionTextQuestion = styled.h3`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
  color: #4f4f4f;
  cursor: pointer;
  width: 100%;
`;

const AccordionTextAnswer = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #4f4f4f;
  padding-top: 32px;
`;

export {
  AccordionDiv,
  AccordionCards,
  AccordionCardsLayout,
  AccordionTextContainer,
  AccordionTextQuestion,
  AccordionTextAnswer,
};

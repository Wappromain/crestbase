import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const FAQContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  padding-top: 19%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTagLine = styled.p`
  font-family: 'Merriweather';
  font-size: 28px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: center;
  color: #262c55;
`;

const FAQAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  margin-top: 64px;
  width: 90%;
`;

export { FAQContainer, SectionTagLine, FAQAccordionContainer };

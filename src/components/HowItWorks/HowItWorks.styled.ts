import styled from 'styled-components';

const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  @media screen and (min-width: 1024px) {
    width: 97%;
  }
`;

const HowItWorksGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  margin-top: 64px;
  /* width: 328px; */
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    justify-items: center;
    margin-bottom: 200px;
  }
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

export { HowItWorksContainer, HowItWorksGridContainer, SectionTagLine };

import styled from 'styled-components';

const MobileHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  height: 67px;
  align-items: center;
  padding: 21px;
`;

const MobileHeaderLogo = styled.div`
  width: max-content;
  height: max-content;
`;

const MobileHeaderMenuIcon = styled.div`
  width: max-content;
`;

export { MobileHeaderContainer, MobileHeaderLogo, MobileHeaderMenuIcon };

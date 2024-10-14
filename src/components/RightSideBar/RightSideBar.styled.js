import styled from 'styled-components';
// import from '';

export const Wrapper = styled.div`
  background-color: 'transparent';
  padding: 40px 0;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 80px 0px 80px 32px;
    display: flex;
    background-repeat: no-repeat;
    background-position: bottom 0px left 385px;
    background-size: auto;
  }
  @media (min-width: 1280px) and (max-width: 1440px) {
    background-color: transparent;
    padding: 0px;
    margin-right: 55px;
  }
  @media (min-width: 1440px) and (max-width: 1600px) {
    margin-right: 105px;
    padding: 0px;
  }
  @media (min-width: 1280px) {
    margin-right: 105px;
    padding: 0px;
  }
`;

export const SummaryWrap = styled.div`
  width: 280px;
  margin: 0 auto;
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 288px;
    margin: 0;
    margin-right: 80px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const FoodWrap = styled.div`
  width: 280px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const RedText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #fd0000;
`;

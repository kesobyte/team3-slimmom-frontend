import styled from '@emotion/styled';
import leafLg from '../../components/assets/bgDairy/leafLg.svg';
import leafMd from '../../components/assets/bgDairy/leafMd.svg';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 326px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 747px 1fr;
    grid-template-rows: 1fr;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  z-index: -1;

  width: 100vw;
  height: 100%;

  background-color: #f0f1f3;

  @media screen and (min-width: 768px) {
    left: -16px;

    height: calc(100vh - 617px);

    background-image: url(${leafMd});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: calc(((100vw - 1280px) / 2) + 763px);
    width: calc(100vw - (((100vw - 1280px) / 2) + 763px));
    height: 100%;

    background-image: url(${leafLg});
  }
`;

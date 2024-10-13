import styled from '@emotion/styled';
import desktopMainBg from '../../components/assets/bg/desktopMainBg.png';
import tabletMainBg from '../../components/assets/bg/tabletMainBg.png';

export const BgImg = styled.div`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;

    width: 100vw;
    height: 100vh;

    background-image: url(${tabletMainBg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopMainBg});
  }
`;

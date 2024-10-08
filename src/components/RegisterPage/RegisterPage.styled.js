import styled from 'styled-components';
import leaves from '../../images/hero/desktop/leaves.png';
import banana from '../../images/hero/desktop/banana.png';
import Strawberry from '../../images/hero/desktop/Strawberry.png';
import Vector from '../../images/hero/desktop/Vector.png';
import leavesRetina from '../../images/hero/desktop/leaves@2x.png';
import bananaRetina from '../../images/hero/desktop/banana@2x.png';
import StrawberryRetina from '../../images/hero/desktop/Strawberry@2x.png';
import VectorRetina from '../../images/hero/desktop/Vector@2x.png';

import bananaTablet from '../../images/hero/tablet/banana.png';
import bananaTabletRetina from '../../images/hero/tablet/banana@2x.png';
import StrawberryTablet from '../../images/hero/tablet/Strawberry.png';
import StrawberryTabletRetina from '../../images/hero/tablet/Strawberry@2x.png';
import leavesTablet from '../../images/login/leaves.png';
import leavesTabletRetina from '../../images/login/leaves@2x.png';
import VectorTablet from '../../images/hero/tablet/Vector.png';
import VectorTabletRetina from '../../images/hero/tablet/Vector@2x.png';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 160px 32px 419px;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 1280px;
    padding: 306px 16px 179px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 60px;
  display: grid;
  gap: 32px;
  justify-content: center;
  @media (min-width: 426px) {
    display: flex;
    gap: 32px;
    justify-content: flex-start;
  }
`;
export const H2 = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights[0]};

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.orange};
  margin-bottom: 60px;
  margin-top: 40px;
  text-align: center;
  @media (min-width: 426px) {
    text-align: left;
  }
`;

export const WrapperWithFruits = styled.div`
  @media (min-width: 426px) and (max-width: 1023px) {
    background-image: url(${StrawberryTablet}), url(${leavesTablet}), url(${bananaTablet}),
      url(${VectorTablet});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: bottom 200px right -80px, top -97px left 0px, bottom 0px right 0px,
      bottom 0px right 0px;
    background-size: 391px 384px, 740px 842px, auto, auto;

    @media (min-resolution: 2dppx) {
      background-image: url(${leavesTabletRetina}), url(${StrawberryTabletRetina}),
        url(${bananaTabletRetina}), url(${VectorTabletRetina});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: bottom 97px left 0px, bottom 279px right -60px, bottom 0px right 0px,
        bottom 0px right 0px;
      background-size: 531px 553px, 291px 284px, 491px 431px, 494px 563px;
    }
  }
  @media (min-width: 1024px) {
    background-image: url(${leaves}), url(${Strawberry}), url(${banana}), url(${Vector});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top 0px right 195px, top 506px right 30px, top 0px right 0px,
      bottom 0px right 0px;
    background-size: auto, auto, auto, 602px 816px;
    @media (min-resolution: 2dppx) {
      background-image: url(${leavesRetina}), url(${StrawberryRetina}), url(${bananaRetina}),
        url(${VectorRetina});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: top 0px right 195px, top 526px right 50px, top 0px right 0px,
        bottom 0px right 0px;
      background-size: 746px 846px, 286px 279px, 498px 450px, 602px 816px;
    }
  }
`;
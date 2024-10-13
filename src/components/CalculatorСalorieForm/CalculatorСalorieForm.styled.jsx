import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  width: 100%;
  padding-bottom: 41px;

  @media screen and (min-width: 768px) {
    align-items: start;

    width: 512px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    align-items: end;
    /* padding-bottom: 111px; */
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 12px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;

  color: #212121;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 48px;

    font-size: 34px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
  }
`;

export const NameLabel = styled.p`
  margin-top: 5px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #fc842d;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

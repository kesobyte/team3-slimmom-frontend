import styled from '@emotion/styled';

export const FormLabel = styled.label`
  display: block;
  position: relative;
  height: 60px;

  &:focus-within span {
    bottom: 35px;

    font-size: 12px;
    color: #fc842d;
  }
`;

export const LabelName = styled.span`
  position: absolute;
  bottom: 20px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;

  transition: bottom 300ms ease, color 300ms ease, font-size 300ms ease;
  z-index: 10;
`;

export const Input = styled.input`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding-bottom: 5px;

  letter-spacing: 0.04em;

  border-bottom: 1px solid #e0e0e0;

  transition: border-color 300ms ease;
  &:focus-within {
    border-bottom: 1px solid #fc842d;
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #fc842d;
  }

  &:not(:placeholder-shown) ~ span {
    bottom: 35px;
    color: #fc842d;

    font-size: 12px;
  }
`;

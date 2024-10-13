import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  height: 150px;

  color: '#9B9FAA';
  overflow: hidden;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    width: 6px;
  }

  &&::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &&::-webkit-scrollbar-thumb {
    background: #264061;
  }

  &&::-webkit-scrollbar-thumb:hover {
    background: #101a28;
  }
`;

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 20px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    #ffffff 100%
  );
`;
export const TopGradient = styled.div`
  position: absolute;
  top: 56px;

  width: 100%;
  height: 15px;

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, #ffffff 100%);
`;

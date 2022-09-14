import styled from "styled-components";

export const Guide = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & img {
    opacity: .4;
    width: 375px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;
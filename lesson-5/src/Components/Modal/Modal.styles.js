import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(24, 29, 40, 0.8);
  z-index: 999999;
`;

export const Container = styled.div`
  position: relative;
  max-width: calc(100vw - 30);
  max-height: calc(100vh - 30);
  margin: auto;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: auto;
`;

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  padding: 92px 130px 48px 130px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export { Container, Content };

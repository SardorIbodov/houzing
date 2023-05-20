import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding);
`;

export { Container };

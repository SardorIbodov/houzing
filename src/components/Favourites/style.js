import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding);
`;

const Header = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
`;

export { Container, Content, Header };

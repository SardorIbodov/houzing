import { styled } from "styled-components";

const Container = styled.div`
  padding: 64px 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding: 24px 30px 48px;
  max-width: 580px;
  width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 44px;
  background: #fff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

export { Container, Content };

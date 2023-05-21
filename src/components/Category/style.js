import { styled } from "styled-components";
import { ReactComponent as arrowButton } from "../../assets/icons/arrowNext.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  padding: 96px 130px;
  position: relative;
`;

const Arrow = styled(arrowButton)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  ${({ next }) =>
    next
      ? `
		transform: rotate(0deg);
		right: 32px; 
	`
      : `
	transform: rotate(180deg);
		left: 32px;
	`}
  transform: ${({ next }) => (next ? "rotate: 0deg" : "rotate: 180deg")};
  right: ${({ next }) => next && "32px"};
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

Content.Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

Content.SubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

Content.Price = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };

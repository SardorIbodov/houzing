import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  height: fit-content;
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
  max-width: 567px;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin-bottom: 48px;
`;

export { Container, Img, Blur, Content };

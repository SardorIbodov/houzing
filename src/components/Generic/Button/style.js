import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "1px solid #0061df",
        color: "#fff",
      };
    default:
      return {
        background: "#0061df",
        border: "1px solid #0061df",
        color: "#fff",
      };
  }
};

const Container = styled.button`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  cursor: pointer;
  ${getType};
  &:active {
    opacity: 0.7;
  }
`;

export { Container };

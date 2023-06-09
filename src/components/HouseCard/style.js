import { styled } from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  border: 1px solid #e6e9ec;
  &:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
  border-radius: 2px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
  height: 220px;
  border-radius: 2px;
`;

const Content = styled.div`
  padding: 24px 20px 0;
  background: #fff;
`;

const Details = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  gap: ${({ row }) => (row ? "20px" : "0px")};
  justify-content: center;
  align-items: ${({ footer }) => (footer ? "flex-start" : "center")};
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Heart = styled(heart)`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Resize = styled(resize)``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  border-top: 1px solid #e6e9ec;
  background-color: #fff;
  border-radius: 0 0 2px 2px;
`;

export { Container, Img, Content, Details, Icons, Footer };

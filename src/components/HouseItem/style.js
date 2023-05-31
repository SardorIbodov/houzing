import { styled } from "styled-components";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: var(--padding);
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 20px;
`;

const Container = styled.div`
  flex: ${({ flex }) => flex};
  ~ .user {
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  row-gap: 8px;

  ${({ column }) => {
    return column
      ? `
		flex-direction: column;
		align-items: flex-start;
		`
      : null;
  }};
`;

const Details = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  gap: ${({ row }) => (row ? "8px" : "0px")};
  justify-content: center;
  align-items: ${({ footer }) => (footer ? "flex-end" : "center")};
`;

const Description = styled.div`
  margin: 48px 0;
  .info {
    margin-top: 16px;
  }
`;

const Icons = styled.div``;
Icons.Share = styled(Share)`
  width: 35px;
  height: 35px;
  padding: 7px;
  border-radius: 50%;
  background: #f6f8f9;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Heart = styled(Heart)`
  width: 35px;
  height: 35px;
  padding: 7px;
  border-radius: 50%;
  background: #f6f8f9;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;
Icons.Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const User = styled.div`
  display: flex;
  column-gap: 10px;
  .user-info {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
`;

User.Img = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

const Maps = styled.div``;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: var(--padding);
  margin: 24px auto;
  display: flex;
  column-gap: 20px;
`;
ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;
ImageContainer.Secondary = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`
ImageContainer.Item = styled.img`
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;

export {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
  Maps,
  ImageContainer,
};

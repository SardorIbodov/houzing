import { Container, Content, Img, Blur } from "./style";
import noImg from "../../assets/imgs/noimg.png";
import houseCategory from "../../assets/imgs/houseCategory.jpeg";

export const CategoryCard = ({onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={houseCategory || noImg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

export default CategoryCard;

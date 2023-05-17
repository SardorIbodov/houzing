import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import { Container } from "./style";
import noImg from "../../assets/imgs/noimg.png";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};

export default Home;

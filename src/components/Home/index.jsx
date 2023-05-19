import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};

export default Home;

import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import Category from "../Category";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <Category />
    </Container>
  );
};

export default Home;

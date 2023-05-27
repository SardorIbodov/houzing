import { Container } from "./style";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";

export const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      {token && <Category />}
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;

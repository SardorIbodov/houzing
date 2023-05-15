import {Input, Button} from "../Generic";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"Something"} width={200} />
    </Container>
  );
};

export default Home;

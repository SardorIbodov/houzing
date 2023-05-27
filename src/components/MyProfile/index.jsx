import { useEffect, useState } from "react";
import { Container, Content, Header } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL } = process.env;

export const MyProfile = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const onSelect = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [search]);

  return (
    <Container>
      <Header>
        <div className="title">Properties</div>
        <p className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Header>
      <Content>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default MyProfile;

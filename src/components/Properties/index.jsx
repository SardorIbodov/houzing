import { useEffect, useState } from "react";
import { Container, Content, Header } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();
  const onSelect = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    request({
      url: `/houses/list${search}`,
    }).then((res) => setData(res?.data || []));
  }, [search, request]);

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

export default Properties;

import { useContext, useEffect, useState } from "react";
import { Container, Content, Header } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/Properties";
const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

export const Favourites = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  const [, dispatch] = useContext(PropertiesContext);
  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  return (
    <Container>
      <Header>
        <div className="title">Favourites</div>
        <p className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Header>
      <Content>
        {data?.data?.length > 0 ? (
          data?.data?.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <h1>No data</h1>
        )}
      </Content>
    </Container>
  );
};

export default Favourites;

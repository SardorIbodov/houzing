import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import uzeReplace from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const countryRef = useRef(),
    regionRef = useRef(),
    cityRef = useRef(),
    zipRef = useRef(),
    roomsRef = useRef(),
    sizeRef = useRef(),
    sortRef = useRef(),
    minPriceRef = useRef(),
    maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  return (
    <Container>
      <Input
        icon={<Icons.Houses></Icons.Houses>}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        dropdownRender={() => {
          return (
            <MenuWrapper>
              <h3 className="subTitle">Address</h3>
              <Section>
                <Input
                  name="country"
                  defaultValue={query.get("country")}
                  onChange={onChange}
                  ref={countryRef}
                  placeholder={"Country"}
                />
                <Input
                  name="region"
                  defaultValue={query.get("region")}
                  onChange={onChange}
                  ref={regionRef}
                  placeholder={"Region"}
                />
                <Input
                  name="city"
                  defaultValue={query.get("city")}
                  onChange={onChange}
                  ref={cityRef}
                  placeholder={"City"}
                />
                <Input
                  name="zip_code"
                  defaultValue={query.get("zip_code")}
                  onChange={onChange}
                  ref={zipRef}
                  placeholder={"Zip code"}
                />
              </Section>
              <h3 className="subTitle">Apartment info</h3>
              <Section>
                <Input
                  name="room"
                  onChange={onChange}
                  ref={roomsRef}
                  placeholder={"Rooms"}
                />
                <Input
                  name="size"
                  onChange={onChange}
                  ref={sizeRef}
                  placeholder={"Size"}
                />
                <Input
                  name="sort"
                  onChange={onChange}
                  ref={sortRef}
                  placeholder={"Sort"}
                />
              </Section>
              <h3 className="subTitle">Price</h3>
              <Section>
                <Input
                  name="min_price"
                  onChange={onChange}
                  ref={minPriceRef}
                  placeholder={"Min price"}
                />
                <Input
                  name="max_price"
                  onChange={onChange}
                  ref={maxPriceRef}
                  placeholder={"Max price"}
                />
              </Section>
            </MenuWrapper>
          );
        }}
        trigger={["click"]}
      >
        <div>
          <Button type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;

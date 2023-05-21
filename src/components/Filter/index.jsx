import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import uzeReplace from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";
import { Select, Space } from "antd";

export const Filter = () => {
  const countryRef = useRef(),
    regionRef = useRef(),
    cityRef = useRef(),
    zipRef = useRef(),
    roomsRef = useRef(),
    sortRef = useRef(),
    minPriceRef = useRef(),
    maxPriceRef = useRef(),
    { REACT_APP_BASE_URL: url } = process.env;
  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [url]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace("sort", sort)}`);
  };

  const optionsCategory = [
    { value: "", label: "Select category" },
    data?.map((category) => {
      return { value: category.id, label: category.name };
    }),
  ].flat(1);

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
                <Space wrap>
                  <Select
                    onChange={onChangeSort}
                    value={query.get("sort") || "Select sort"}
                    style={{
                      width: 200,
                      height: 44,
                    }}
                    options={[
                      { value: "", label: "Select sort" },
                      { value: "asc", label: "Ascending" },
                      { value: "desc", label: "Descending" },
                    ]}
                  />
                </Space>
                <Space wrap>
                  <Select
                    onChange={onChangeCategory}
                    value={
                      data[query.get("category_id") - 1]?.name ||
                      "Select category"
                    }
                    style={{
                      width: 200,
                      height: 44,
                    }}
                    options={optionsCategory}
                  />
                </Space>
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

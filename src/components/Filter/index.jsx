import { useRef, useState } from "react";
import { Dropdown } from "antd";
import { Input, Button } from "../Generic";
import { Container, Wrapper, Icons, MenuWrapper, Section } from "./style";

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const countryRef = useRef(),
    regionRef = useRef(),
    cityRef = useRef(),
    zipRef = useRef(),
    roomsRef = useRef(),
    sizeRef = useRef(),
    sortRef = useRef(),
    minPriceRef = useRef(),
    maxPriceRef = useRef();
  const menu = (
    <MenuWrapper>
      <h3 className="subTitle">Address</h3>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef} placeholder={"Region"} />
        <Input ref={cityRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip code"} />
      </Section>
      <h3 className="subTitle">Apartment info</h3>
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h3 className="subTitle">Price</h3>
      <Section>
        <Input ref={minPriceRef} placeholder={"Min price"} />
        <Input ref={maxPriceRef} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  const items = [
    {
      label: menu,
      key: "0",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Input
          icon={<Icons.houses></Icons.houses>}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          open={open}
        >
          <div onClick={() => setOpen(!open)}>
            <Button type="light">
              <Icons.filter /> Advanced
            </Button>
          </div>
        </Dropdown>
        <Button>
          <Icons.search /> Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;

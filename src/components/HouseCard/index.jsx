import { Container, Content, Details, Icons, Footer, Img } from "./style";
import noImg from "../../assets/imgs/noimg.png";

export const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    address,
    city,
    country,
    description,
    houseDetails,
    salePrice,
    price,
    category,
  } = data;
  return (
    <Container>
      <Img src={(attachments && attachments[0].imgPath) || noImg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} | {category?.name || "Category"}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.room || 0} Room</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details.Item footer="true">
          <div className="info" style={{ textDecoration: "line-through" }}>
            ${price || 0}/mo
          </div>
          <div className="subTitle">${salePrice || 0}/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize></Icons.Resize>
          <Icons.Heart></Icons.Heart>
        </Details.Item>
      </Footer>
    </Container>
  );
};

export default HouseCard;

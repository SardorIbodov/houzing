import { styled } from "styled-components";
import { ReactComponent as Maps } from "../../assets/icons/maps.svg";
import { ReactComponent as Calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as House } from "../../assets/icons/house.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";

const Wrapper = styled.div`
  background: #f5f7fc;
  padding: 48px 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 77px;
`;

Content.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  text-align: center;
`;

const Icons = styled.div``;
Icons.Maps = styled(Maps)`
  margin-bottom: 16px;
`;
Icons.Calculator = styled(Calculator)`
  margin-bottom: 16px;
`;
Icons.House = styled(House)`
  margin-bottom: 16px;
`;
Icons.Discord = styled(Discord)`
  margin-bottom: 16px;
`;

export { Wrapper, Container, Header, Content, Icons };

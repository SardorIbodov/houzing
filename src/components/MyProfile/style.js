import { styled } from "styled-components";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/trash.svg";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding);
`;

const Header = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 8px;
`;

const Content = styled.div`
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

Home.Img = styled.img`
  width: 100px;
  height: 100px;
`;

Home.Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Icons = styled.div``;
Icons.Edit = styled(Edit)`
  cursor: pointer;
  &:hover {
    & path {
      fill: var(--backgroundPrimary);
    }
  }
`;
Icons.Delete = styled(Delete)`
  cursor: pointer;
  &:hover {
    & path {
      fill: red;
    }
  }
`;

export { Container, Content, Header, Icons, Home };

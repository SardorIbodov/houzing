import { styled } from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";

const Container = styled.div`
	width: 100%;
	max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  margin: 0 auto;
  gap: 20px;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  gap: 20px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section };

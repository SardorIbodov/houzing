import { styled } from "styled-components";
import { ReactComponent as Delete } from "../../assets/icons/trash.svg";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding);
`;

const MenuWrapper = styled.div`
  gap: 20px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

const Group = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const DeleteIcon = styled(Delete)`
  cursor: pointer;
  margin-left: 5px;
`;

export { Container, MenuWrapper, Section, Group, DeleteIcon };

import { styled } from "styled-components";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  background: #0d263b;
  padding: 48px 0 0 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

Content.Item = styled.div`
  width: fit-content;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
`;

Content.Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

Content.Elem = styled.div`
  display: flex;
  column-gap: 10px;
`;

Content.Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin: 0;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

const Diveder = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
`;

const Bottom = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
	align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #fff;
  }
`;

const Copyright = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

const Logo = styled(logoImg)`
  margin-right: 12px;
`;

const Icons = styled.div``;
Icons.Pin = styled(Pin)`
  width: 20px;
`;
Icons.Phone = styled(Phone)`
  width: 20px;
`;
Icons.Email = styled(Email)`
  width: 20px;
`;
Icons.Facebook = styled(Facebook)`
  width: 36px;
  height: 36px;
  padding: 8px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
Icons.Twitter = styled(Twitter)`
  width: 36px;
  height: 36px;
  padding: 8px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
Icons.Instagram = styled(Instagram)`
  width: 36px;
  height: 36px;
  padding: 8px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
Icons.Linkedin = styled(Linkedin)`
  width: 36px;
  height: 36px;
  padding: 8px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export {
  Wrapper,
  Container,
  Content,
  Icons,
  Socials,
  Diveder,
  Bottom,
  Section,
  Logo,
	Copyright
};

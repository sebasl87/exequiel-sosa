import styled from "styled-components";

const Layout = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  margin-bottom: 9px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  background: transparent;
  width: 16px;
  margin-left: 12px;
  margin-right: 12px;
`;

const Title = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  &:hover {
    color: #fff;
  }
`;

export const ContactSection = ({ isComplete, title, handleClick, icon }) => {
  return (
    <Layout isComplete={isComplete} onClick={handleClick}>
      <Icon src={icon} />
      <Title>{title}</Title>
    </Layout>
  );
};

export default ContactSection;
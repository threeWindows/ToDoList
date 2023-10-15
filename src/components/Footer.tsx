import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  width: 600px;
  margin: auto;
  height: auto;
  border-top: 1px solid #ffffff;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  color: #423655;
  position: relative;
  display: flex;
  justify-content: space-around;
  border-radius: 0px 0px 30px 30px;
`;

interface Props {
  totalTasks: number;
}

const Footer = ({ totalTasks }: Props) => {
  return (
    <Container>
      <span>{totalTasks} items left</span>
    </Container>
  );
};

export default Footer;

import styled from "styled-components";


export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (max-width: 49em) {
    flex-direction: column;
    height: auto;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: 0.5px;

  @media (max-width: 49em) {
    text-align: center;
    margin-top: 10px;
  }
`;
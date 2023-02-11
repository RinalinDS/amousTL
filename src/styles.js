import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 8rem;
  gap: 6rem;
  padding: 0 4rem;
  @media (max-width: 49em) {
    gap: 3rem;
    padding: 0 3rem;
  }
`
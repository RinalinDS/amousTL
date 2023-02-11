import styled from "styled-components";

export const TodolistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
  @media (max-width: 41em) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    & > div {
      margin-bottom: 3rem;
    }
  }
`
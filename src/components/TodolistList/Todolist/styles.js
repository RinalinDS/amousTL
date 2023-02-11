import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 1.8rem 3rem;
  max-width: 36rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const NoTasksInfoContainer = styled.div`
  font-size: 1.6rem;
  color: #999;
  text-align: center;
`
export const FilterButtonContainer = styled.div`
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;

  button {
    font-size: inherit;
  }
`
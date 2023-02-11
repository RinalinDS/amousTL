import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  padding-right: 3rem;

  span svg, button svg {
    font-size: 2.4rem;
  }

  button {
    position: absolute;
    font-size: inherit;
    right: -1.2rem;
  }
`
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const StyledInput = styled.input`
  display: block;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  font-size: inherit;
  text-indent: 2px;
  width: 90%;
  border: 1px solid gray;
  border-radius: 9px;
  padding: 0.5rem;
`

export const StyledSpan = styled.span`
  width: 90%;
  font-size: inherit;
  color: #333333;
  font-weight: 600;
  word-break: break-word;
  letter-spacing: -0.5px;
  text-align: left;
`

export const ErrorText = styled.span`
  color: red;
  font-size: 1rem;
  align-self: center;
`






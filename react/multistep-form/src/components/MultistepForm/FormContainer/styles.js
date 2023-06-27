import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  form {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const InputsContainer = styled.div`
  min-height: 280px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 3px;
  background: #dfdfdf;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #cfcfcf;
  }
`;

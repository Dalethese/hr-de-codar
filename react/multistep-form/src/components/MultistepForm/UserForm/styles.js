import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;

  label {
    font-weight: bold;
    color: #777;
    font-size: 0.9rem;
  }

  input,
  textarea {
    padding: 0.6rem;
    border: none;
    border-radius: 3px;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  }

  textarea {
    height: 120px;
  }
`;

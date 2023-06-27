import styled from "styled-components";
import { FormControl } from "../UserForm/styles";

export const ReviewForm = styled.div``;

export const ScoreContainer = styled(FormControl)`
  flex-direction: row;
  gap: 2rem;

  svg {
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      fill: #7076f4;
    }
  }

  input:checked ~ svg {
    fill: #7076f4;
  }
`;

export const RadioContainer = styled.label`
  text-align: center;
  position: relative;

  input {
    opacity: 0;
    position: absolute;
    top: 15px;
    left: 30px;
  }

  p {
    font-style: italic;
    font-weight: 300;
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
`;

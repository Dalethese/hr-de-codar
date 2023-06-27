import styled from "styled-components";

export const StyledSteps = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: "";
    width: 380px;
    border-bottom: 1px solid #ccc;
    position: absolute;
    top: 20px;
    left: 0;
  }
`;

export const Step = styled.div`
  text-align: center;
  background-color: #fff;
  z-index: 1;
  width: 120px;
  padding: 0.5rem;

  svg {
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
  }

  &.active {
    font-weight: bold;

    svg {
      fill: #7076f4;
    }
  }
`;

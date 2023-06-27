import { Step, StyledSteps } from "./styles";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

/* eslint-disable react/prop-types */
export function Steps({ currentStep }) {
  return (
    <StyledSteps>
      <Step className="active">
        <AiOutlineUser />
        <p>Identificação</p>
      </Step>
      <Step className={currentStep >= 1 ? "active" : ""}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </Step>
      <Step className={currentStep >= 2 ? "active" : ""}>
        <FiSend />
        <p>Envio</p>
      </Step>
    </StyledSteps>
  );
}

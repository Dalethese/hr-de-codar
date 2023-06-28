import { Container } from "./styles";
import * as Gr from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import * as S from "./styles";
import { UserForm } from "../UserForm";
import { ReviewForm } from "../ReviewForm";
import { Thanks } from "../Thanks";

// hooks
import { useForm } from "../../hooks/useForm";
import { Steps } from "./Steps";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

export function FormContainer() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm
      key={UserForm}
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <ReviewForm
      key={ReviewForm}
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <Thanks key={Thanks} data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <Container>
      <Steps currentStep={currentStep} />
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <S.InputsContainer>{currentComponent}</S.InputsContainer>

        <S.Actions>
          {!isFirstStep && (
            <S.Button type="button" onClick={() => changeStep(currentStep - 1)}>
              <Gr.GrFormPrevious />
              <span>Voltar</span>
            </S.Button>
          )}

          {!isLastStep ? (
            <S.Button type="submit">
              <span>Avançar</span>
              <Gr.GrFormNext />
            </S.Button>
          ) : (
            <S.Button type="button">
              <span>Enviar</span>
              <FiSend />
            </S.Button>
          )}
        </S.Actions>
      </form>
    </Container>
  );
}

import * as S from "../styles";
import { BsTrashFill } from "react-icons/bs";

function ServiceCard({ id, name, cost, description, key, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();

    handleRemove(id, cost);
  };

  return (
    <S.ProjectCard>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className="project_card_actions">
        <button onClick={remove}>
          <BsTrashFill /> Excluir
        </button>
      </div>
    </S.ProjectCard>
  );
}
export default ServiceCard;

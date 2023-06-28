import { func, string } from "prop-types";
import { FormControl } from "./styles";

UserForm.propTypes = {
  data: {
    name: string,
    email: string,
    review: string,
    comment: string,
  },
  updateFieldHandler: func,
};

export function UserForm({ data, updateFieldHandler }) {
  return (
    <>
      <FormControl>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </FormControl>
      <FormControl>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          required
        />
      </FormControl>
    </>
  );
}

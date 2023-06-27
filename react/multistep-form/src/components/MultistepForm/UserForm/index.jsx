import { FormControl } from "./styles";

export function UserForm() {
  return (
    <>
      <FormControl>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
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
          required
        />
      </FormControl>
    </>
  );
}

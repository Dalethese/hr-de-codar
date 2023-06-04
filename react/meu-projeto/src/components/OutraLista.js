function OutraLista ({ itens }) {;
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      { itens.length > 0
        ? itens.map(item => (
          <p key={item}>{item}</p>
        ))
        : (
          <p>Carregando...</p>
        )
      }
    </>
  )
}
export default OutraLista
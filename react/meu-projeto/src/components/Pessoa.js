function Pessoa({nome, idade, profissao, foto}) {
  return(
    <div>
      <img 
        src={foto} 
        alt="Imagem" 
        width={150} 
        height={150} 
        style={{objectFit: "cover", borderRadius: "50%"}} 
      />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade} </p>
      <p>Profissão: {profissao} </p>
    </div>
  )
}

export default Pessoa
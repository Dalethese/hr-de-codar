import { useState } from "react"

function Condicional() {
  
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()
  
  function enviarEmail(e) {
    e.preventDefault()

    setUserEmail(email)
    console.log(userEmail)
  }

  function limparEmail(e) {
    e.preventDefault()

    setUserEmail('')
  }
  
  return (
    <>
      <h2>Cadastre o seu e-mail</h2>
      <form onSubmit={enviarEmail}>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Digite seu email..." 
          onChange={e => setEmail(e.target.value)}
        />
        <button>Enviar email</button>
      </form>
      {userEmail && (
        <div>
          <p>O  email do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar email</button>
        </div>
      )}
    </>
  )
}

export default Condicional
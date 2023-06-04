import Button from "./event/Button"

function Evento({ num }) {
  function meuEvento() {
    console.log(`Ativando primeiro evento`)
  }

  function segundoEvento() {
    console.log('Segundo Evento')
  }
  
  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  )
}

export default Evento
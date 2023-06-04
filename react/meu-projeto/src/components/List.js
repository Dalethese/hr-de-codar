import Item from "./Item"

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca={'Ferrari'} lancamento={1985} />
        <Item marca={'Ford'} lancamento={1965} />
        <Item marca={'Renault'}/>
        <Item />
      </ul>
    </>
  )
}

export default List
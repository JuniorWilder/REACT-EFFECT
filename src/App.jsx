import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0)
  const [lista, setLista] = useState([])

  const incrementar = () => {
    console.log('aumentou +10');
    setCount(count + 10)
  }

  // 1 - Sempre executa na renderização 
  useEffect(() => {
    console.log('Renderizou');
  })

  // 2 - Com o array de dependencias[], é onde insiro as variaveis que serao observadas
  useEffect(() => {
    if (count === 50)
      console.log('Renderizou 2!');
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        setLista(data/* .splice(0,10) */)
        console.log(data)
      })
  }, [])


  return (
    <>
      <div className="container">
        {/* <h1>{`Contador: ${count}`}</h1>
      <button onClick={incrementar}>+10</button> */}

        <h1>Algum de fotos</h1>

        <div className="row row-cols-1 row-cols-md-6 g-6">
          {lista.map((foto, index) => <Card key={index} id={foto.id} text={foto.title} image={foto.thumbnailUrl}/>)}
          {/* <Card
            id={1}
            text={'accusamus beatae ad facilis cum similique qui sunt'}
            image={'https://via.placeholder.com/150/92c952'}
          />
          <Card
            id={2}
            text={'reprehenderit est deserunt velit ipsam'}
            image={'https://via.placeholder.com/150/771796'}
          /> */}
        </div>
      </div>
    </>
  )
}

export default App

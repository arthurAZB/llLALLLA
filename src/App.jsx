
import './App.css'

function radar(velocidade){
  if(velocidade > 80){
    return 'multado'
}else if(velocidade == 80){
  return 'ultrapassando o limite'
}else{
  return 'dentro da lei'
}
}




function App() {
  const carro = 'fusca'
  const cor = 'azul'
  const preco = 7
  const motor = 'W16 quadriturbo de 8.0 litros'
  const velocidade = 1000000000067

  return (
    <>
      <h1>radar ultra sonico</h1>
      <p>carro: {carro}</p>
      <p>cor: {cor}</p>
      <p>preco: {preco}</p>
      <p>motor: {motor}</p>
      <p>velocidade: {velocidade}</p>
      <p>radar: {radar(velocidade)}</p>
      <p></p>
    </>
  )
}

export default App

import { Container } from "./App";

function App() {

  return (
    <Container>
      <h1>Buscador de Cep</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep.."
        />

        <button className="buttonSearch">
          Procurar
        </button>
      </div>
    </Container>
  )
}

export default App

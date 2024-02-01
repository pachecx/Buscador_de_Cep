import { Container, Main } from "./App";
import { FiSearch } from 'react-icons/fi';

function App() {

  return (
    <Container>
      <h1 className="title">Buscador de Cep</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep.."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/> 
        </button>
      </div>

      <Main>
        <h2>CEP: 65110000</h2>

        <span>Rua teste</span>
        <span>Complento: Prox ao posto</span>
        <span>Ubatuba</span>
        <span>São luis - MA</span>
      </Main>
    </Container>
  )
}

export default App

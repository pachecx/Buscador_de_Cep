import { Container, Main } from "./App";
import { FiSearch } from 'react-icons/fi';
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");

  function handleSearch(){
    if(input === ""){
      alert("Insira algum Cep")
      return;
    }
  }

  return (
    <Container>
      <h1 className="title">Buscador de Cep</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep.."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
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

import { Container, Main } from "./App";
import { FiSearch } from 'react-icons/fi';
import { useState } from "react";
import api from "./services/api";

function App() {

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch(){

    if(input === ""){
      alert("Insira algum Cep")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      
      setCep(response.data);
      setInput("");

    }catch{
      alert("Erro ao buscar o Cep!")
      setInput("");
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

      {Object.keys(cep).length > 0 && (
        <Main>
          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </Main>
      )}
      
    </Container>
  )
}

export default App

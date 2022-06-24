import { useState } from 'react';
import { cadastrarPet, consultarPet } from '../src/api/api-dog'
import './App.css';

export default function App() {
  const [nome, setNome] = useState('');

  async function salvarClick(){
    const resp = cadastrarPet(nome);
  }

  return (    
    <main>
      <h1>Prova React</h1>
      <input type='text' onChange={() => setNome}/>

      <button onClick={salvarClick} >Salvar</button> 

      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
          </tr>
        </thead>
      </table>
    </main>
  );
}

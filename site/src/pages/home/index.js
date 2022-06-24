import { useEffect, useState } from 'react';
import { cadastrarDog, listarDogs } from '../../api/pets/index';

import './index.sass';

export default function home() {
    
  const [nome, setNome] = useState('');

  async function salvarClick(){

    try {const r = await  cadastrarDog(nome)
    alert('cadastro realizado')

    }catch (err) {
      alert(err.message)
    }
  }

  async function listarTudo(){

    const r = await listarDogs()
    setPet(r)
  }

  useEffect(() => {
    listarTudo()
  }, [])

  return (
    <main>
      <h1> Prova React-API </h1>

      <div>
        <input type='text' placeholder='Nome Pet :' value={nome} onChange={e => setNome(e.target.value)} />
        <button onClick={ salvarClick } > Cadastrar </button>
      </div>

      <div>

        <table>

          <thead>
            <tr>
              <td>Nome</td>
              <td>ID</td>
            </tr>
          </thead>

          <tbody>
            { pet.map(item =>
            <tr>
              <td>{item.nome}</td>
              <td>{item.id}</td>
            </tr>
            )}
          </tbody>

        </table>

      </div>

    </main>
  );
}


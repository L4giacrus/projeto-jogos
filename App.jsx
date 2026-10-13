import { useState } from 'react'

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [nome, setNome] = useState('')

  function cadastrar() {
    if (!nome) return

    setTarefas([
      ...tarefas,
      { id: Date.now(), nome }
    ])

    setNome('')
  }

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <input
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome da tarefa"
      />

      <button onClick={cadastrar}>Cadastrar</button>

      {tarefas.map(t => (
        <p key={t.id}>
          {t.nome}
          <button onClick={() =>
            setTarefas(tarefas.filter(x => x.id !== t.id))
          }>
            Excluir
          </button>
        </p>
      ))}

      {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
    </div>
  )
}

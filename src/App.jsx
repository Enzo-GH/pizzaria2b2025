import { useState } from "react"

function App(){

  

  const Formulario = (props) => {

    const [nome, setNome] = useState('Ronaldo')

    return (
      <div>
        <h3>{props.título}</h3>
        <input className="nome" 
          placeholder="Digite seu nome..." 
          onChange={(e)=>{setNome(e.target.value)}}
          name="nome" 
          type="text" />
        <button className="botao" onClick={
          () => {
            if(nome.length > 0)
              alert(nome)
            else
              alert(props.mensagem)
          }
        }>          
        CLIQUE AQUI
        </button>
      </div>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2B</h3>
      <Formulario título = "Nome" mensagem = "Santos"/>
      <Formulario título = "Email" mensagem = "Curintia"/>
      <Formulario título = "CPF" mensagem = "Parmera"/>
      <Formulario />
    </div>
  )
}

export default App


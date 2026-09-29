// Importando o hook useStage: Permite criar estados para os componentes
import { useState } from "react";

const Contador = () => {
  // Criando um estado para o componente
  // Contagem: Nome do estado
  // setContagem: Função que altera o valor do estado
  // useState(): Valor inicial do estado
  const [contagem, setContagem] = useState(0);

  return (
    <>
      <div>
        <p>Contador: {contagem}</p>
        <button onClick={() => {setContagem(contagem + 1);}}>Adicionar</button>
      </div>
    </>
  );
};

export default Contador;

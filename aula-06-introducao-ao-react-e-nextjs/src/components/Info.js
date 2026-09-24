const { useState } = require("react");

const Info = () => {
    const informacoes = ["Leonardo", "Registro", "27 anos"];
    const [indice, setIndice] = useState(0);
  return (
    <>
      <div>
        <p>Informações: {informacoes[indice]}</p>
        <button onClick={() => {setIndice(indice + 1);}}>Mudar</button>
      </div>
    </>
  );
};

export default Info;

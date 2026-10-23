import styles from "@/components/CreateContent/CreateContent.module.css";
// Importando os hook useState
import { useState } from "react";
import axios from "axios";

const CreateContent = () => {
  // Criando os estados para armazenar as informações do formulário
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  // Função que envia os dados para API (cadastrar um jogo)
  const handleSubmit = async (event) => {
    // Evitando o recarregamento da página
    event.preventDefault();
    // Verificando se todos os campos do formulário foram preenchidos
    if (title && platform && genre && rating && year && price != "") {
      // Se tudo foi preenchido, cria o JSON com os dados do jogo
      const game = {
        title: title,
        year: year,
        price: price,
        descriptions: {
          platform: platform,
          genre: genre,
          rating: rating,
        },
      };
      // Enviando uma requisição para a API
      try {
        const response = await axios.post("http://localhost:4000/games", game);
        // Verificando o retorno da API
        if (response.status === 201) {
          alert("Games cadastrado com sucesso!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          // Coletando o dado do formulário e atualizando o estado
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o gênero do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira o classificação do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
    </div>
  );
};

export default CreateContent;

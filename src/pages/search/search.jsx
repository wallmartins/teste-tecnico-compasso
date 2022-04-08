import React from "react";
import { getUser } from "../../api/request";
import Button from "../../components/button/button";
import Error from "../../helper/error";
import styles from "./search.module.css";
import { useNavigate } from "react-router-dom";

function Search({ setCurrentUser }) {
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState();
  const navigate = useNavigate();

  const catchUser = async () => {
    const userObj = await getUser(username);
    if (userObj.message) {
      return setError("Digite um usuário válido para realizar a pesquisa");
    }

    setError();
    setCurrentUser(userObj);
    navigate(userObj.login);
  };

  return (
    <main className={styles.search__container}>
      <div>
        <h1 className={styles.search__container__title}>Github Search</h1>
        <input
          type="text"
          placeholder="Digite o usuário que deseja pesquisar"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
          className={styles.search__search}
        />
        <Button type="button" onClick={catchUser} search={true}>
          Pesquisar
        </Button>
        {error && <Error error={error} />}
      </div>
    </main>
  );
}

export default Search;

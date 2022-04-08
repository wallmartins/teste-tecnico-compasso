import React from "react";
import { useNavigate } from "react-router-dom";
import { getRepos, getStarred } from "../../api/request";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import List from "../../components/list/list";
import styles from "./result.module.css";

const Result = ({ currentUser }) => {
  const [repos, setRepos] = React.useState();
  const [starred, setStarred] = React.useState();
  const [option, setOption] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    setOption();
  }, []);

  const catchRepos = async () => {
    const reposObj = await getRepos(currentUser.login);
    setRepos(reposObj);
    setOption("repos");
  };

  const catchStarred = async () => {
    const starredObj = await getStarred(currentUser.login);
    setStarred(starredObj);
    setOption("starred");
  };

  return (
    <section className={styles.result__container}>
      <div className={styles.result__user__content}>
        <Card user={currentUser} />
        {currentUser && (
          <>
            <div className={styles.result__requests}>
              <Button type="button" onClick={catchRepos}>
                Repositórios
              </Button>
              <Button type="button" onClick={catchStarred}>
                Mais acessados
              </Button>
            </div>
            <Button type="button" onClick={() => navigate("/user")}>
              Nova pesquisa
            </Button>
          </>
        )}
      </div>

      <div>
        {option === "repos" && <List list={repos} />}
        {option === "starred" && <List list={starred} starred={true} />}
      </div>
    </section>
  );
};

export default Result;

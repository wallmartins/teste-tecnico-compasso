import React from "react";
import styles from "./list.module.css";

const List = ({ list, starred }) => {
  return (
    <section className={styles.list__container}>
      {list &&
        list.map((item) => (
          <div className={styles.list__card} key={item.id}>
            <span className={styles.list__card__name}>{item.name}</span>
            {starred && (
              <p className={styles.list__card__owner}>{item.owner.login}</p>
            )}
            <p className={styles.list__card__description}>
              {item.description ? item.description : "Sem descrição"}
            </p>
            <a
              href={item.html_url}
              rel="noreferrer"
              target="_blank"
              className={styles.list__card__link}
            >
              + Saiba mais
            </a>
          </div>
        ))}
    </section>
  );
};

export default List;

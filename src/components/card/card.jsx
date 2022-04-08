import React from "react";
import styles from "./card.module.css";

const Card = ({ user }) => {
  return (
    <div className={styles.card__container}>
      <img
        src={user.avatar_url}
        alt="avatar que o usuário escolheu para utilizar no github"
        className={styles.card__user__avatar}
      />
      <h3 className={styles.card__user__name}>{user.name}</h3>
      <p className={styles.card__user__bio}>{user.bio && user.bio}</p>
      <div className={styles.card__user__metrics}>
        <p className={styles.card__user__follows}>
          Seguidores:{" "}
          <span className={styles.card__user__follows__indicator}>
            {user.followers}
          </span>
        </p>
        <p className={styles.card__user__follows}>
          Seguindo:{" "}
          <span className={styles.card__user__follows__indicator}>
            {user.following}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import styles from "./index.module.scss";
import TinderCard from "react-tinder-card";

import { users } from "../../utils/constants";

export default function TinderCards() {
  const [tinderUsers, setTinderUsers] = useState(users);

  const people = tinderUsers.map(({ id, name, profileImg }) => (
    <TinderCard
      key={id}
      className={styles.tinderCard}
      preventSwipe={["up", "down"]}
    >
      <div
        className={styles.cardWrapper}
        style={{
          backgroundImage: `url("${profileImg}")`,
        }}
      >
        <span>{name}</span>
      </div>
    </TinderCard>
  ));

  return <div className={styles.tinderCards}>{people}</div>;
}

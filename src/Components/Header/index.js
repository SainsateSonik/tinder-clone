import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as TinderIcon } from "../../utils/assets/icons/tinder.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <IconButton className={styles.button}>
        <PersonIcon className={styles.icon} />
      </IconButton>
      <Link to="/">
        <TinderIcon className={styles.icon} />
      </Link>
      <IconButton className={styles.button}>
        <ForumIcon className={styles.icon} />
      </IconButton>
    </div>
  );
}

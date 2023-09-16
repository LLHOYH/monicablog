import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AuthInput.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AuthInput() {
  return (
    <div className={styles.flex}>
      <input className={styles.inputbox} type="text"></input>
      <button className={styles.submitButton} onClick={() => {}}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default AuthInput;

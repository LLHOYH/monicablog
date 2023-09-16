import styles from "./Comment.module.css";

function Comment({ title, content }) {
  return (
    <div class={styles.comment}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Comment;

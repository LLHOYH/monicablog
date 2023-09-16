import styles from "./CommentTitle.module.css";

function CommentTitle({ commentTitle }) {
  return <h3 className={styles.commentTitle}>{commentTitle}</h3>;
}

export default CommentTitle;

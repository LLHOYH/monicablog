import styles from "./CommentContent.module.css";

function CommentContent({ commentContent }) {
  return <p className={styles.commentContent}>{commentContent}</p>;
}

export default CommentContent;

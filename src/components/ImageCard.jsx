import styles from "./ImageCard.module.css";

import CommentTitle from "./CommentTitle";
import CommentContent from "./CommentContent";
import Image from "./Image";
import Comment from "./Comment";

function ImageCard({ imageCard }) {
  const imageStyle = {
    backgroundImage: `url(${imageCard.imageSrc})`,
  };

  return (
    <div className={styles.image_card} style={imageStyle}>
      {/* <Image imageSrc={imageCard.imageSrc} album={imageCard} /> */}

      {/* <Comment
        title={imageCard.commentTitle}
        content={imageCard.commentContent}
      /> */}
      <CommentTitle commentTitle={imageCard.commentTitle} />
      <CommentContent commentContent={imageCard.commentContent} />
    </div>
  );
}

export default ImageCard;

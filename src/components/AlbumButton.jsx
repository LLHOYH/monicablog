import { useAlbumImages } from "../contexts/ImagesContext";
import styles from "./AlbumButton.module.css";

function AlbumButton({ children, album }) {
  const { changeAlbum } = useAlbumImages();
  function handleClick() {
    changeAlbum(album);
  }

  return (
    <button className={styles.album_button} onClick={handleClick}>
      {children}
    </button>
  );
}

export default AlbumButton;

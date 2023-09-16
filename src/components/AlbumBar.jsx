import styles from "./AlbumBar.module.css";
import AlbumButton from "./AlbumButton";
import Icon from "./Icon";

function AlbumBar({ uniqueAlbums }) {
  return (
    <div className={styles.album_bar}>
      {/* default 'All' Album */}
      <AlbumButton key="All" album="All">
        <Icon album="All" />
      </AlbumButton>

      {uniqueAlbums.albums.map((album) => (
        <AlbumButton key={album} album={album}>
          <Icon album={album} />
        </AlbumButton>
      ))}
    </div>
  );
}

export default AlbumBar;

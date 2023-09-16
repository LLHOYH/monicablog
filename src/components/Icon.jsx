import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Icon.module.css";
import { useAlbumImages } from "../contexts/ImagesContext";

import {
  faCat,
  faEarthAfrica,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const iconDict = {
  All: faCat,
  Cat: faCat,
  Housemate: faHouse,
  Lover: faHeart,
  Travel: faEarthAfrica,
};

function Icon({ album }) {
  const { selectedAlbum } = useAlbumImages();
  return (
    <FontAwesomeIcon
      className={selectedAlbum === album ? styles.active : ""}
      icon={iconDict[album]}
    />
  );
}

export default Icon;

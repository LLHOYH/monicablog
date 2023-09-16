import { useState } from "react";
import AlbumBar from "./AlbumBar";
import ImageCard from "./ImageCard";
import styles from "./ImageSection.module.css";

import { useAlbumImages } from "../contexts/ImagesContext";

import { uniqueAlbums } from "./dummy_data";

function ImageSection() {
  const { filteredImageList } = useAlbumImages();

  return (
    <div className={styles.image_section}>
      <AlbumBar uniqueAlbums={uniqueAlbums} />
      {filteredImageList.map((imageCard) => (
        <ImageCard key={imageCard.imageId} imageCard={imageCard} />
      ))}
    </div>
  );
}

export default ImageSection;

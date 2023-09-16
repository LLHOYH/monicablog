import { createContext, useContext, useEffect, useReducer } from "react";
import { dummyImageList } from "../components/dummy_data";

const ImagesContext = createContext();

const initialState = {
  imageList: [],
  filteredImageList: [],
  selectedAlbum: "",
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "images/Loaded":
      return {
        ...state,
        isLoading: false,
        imageList: action.payload,
        filteredImageList: action.payload,
      };
    case "images/changeAlbum":
      return {
        ...state,
        isLoading: false,
        filteredImageList: action.payload.filteredImageList,
        selectedAlbum: action.payload.selectedAlbum,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        filteredImageList: [],
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function ImagesProvider({ children }) {
  const [
    { imageList, filteredImageList, selectedAlbum, isLoading, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getImages() {
      dispatch({ type: "loading" });
      try {
        dispatch({ type: "images/Loaded", payload: dummyImageList.images });
      } catch (err) {
        dispatch({ type: "rejected", payload: "Error loading images..." });
      }
    }

    getImages();
  }, []);

  async function changeAlbum(album) {
    let filteringImages = [...imageList];

    if (album !== "All")
      filteringImages = imageList
        .slice()
        .filter((imageCard) => imageCard.album === album);

    dispatch({
      type: "images/changeAlbum",
      payload: { filteredImageList: filteringImages, selectedAlbum: album },
    });
  }

  return (
    <ImagesContext.Provider
      value={{
        imageList,
        filteredImageList,
        selectedAlbum,
        isLoading,
        error,
        changeAlbum,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

function useAlbumImages() {
  const context = useContext(ImagesContext);

  if (context === undefined) throw new Error("ImagesContext not defined");

  return context;
}

export { ImagesProvider, useAlbumImages };

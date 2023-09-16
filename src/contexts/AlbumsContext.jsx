import { createContext, useContext, useEffect, useReducer } from "react";
import { uniqueAlbums } from "../components/dummy_data";

const AlbumContext = createContext();

const initialState = { albums: [], isLoading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "albums/loaded":
      return { ...state, albums: action.payload, isLoading: false, error: "" };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Action type invalid");
  }
}

function AlbumProvider({ children }) {
  const { albums, dispatch } = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchAlbums() {
      dispatch({ type: "loading" });

      try {
        let albums = uniqueAlbums;
        dispatch({ type: "albums/loaded", payload: albums });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    fetchAlbums();
  }, [dispatch]);

  return (
    <AlbumContext.Provider value={albums}>{children}</AlbumContext.Provider>
  );
}

function useAlbum() {
  const context = useContext(AlbumContext);

  if (context === undefined) throw new Error("Album context is not defined!");
  return context;
}

export { AlbumProvider, useAlbum };

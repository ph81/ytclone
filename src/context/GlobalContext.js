import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import globalReducer from '../reducers/globalReducer';
import {
  GET_VIDEOS,
  GET_SELECTED_VIDEO,
  GET_RELATED_VIDEOS,
} from '../utils/actions';

const initialState = {
  videos_loading: false,
  videos_error: false,
  videos: [],
  darkMode: false,
  items: [],
};

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  //fetching videos
  const fetchVideos = async (searchTerm) => {
    console.log(searchTerm);
    const controller = new AbortController();
    const url = process.env.REACT_APP_YT_BASE_URL;
    try {
      const response = await axios.get(url, {
        params: {
          part: 'snippet',
          maxResults: 16,
          key: process.env.REACT_APP_YT_APIKEY,
          q: searchTerm,
        },
        signal: controller.signal,
      });
      const items = response.data.items;

      const filterOnlyVideos = items.filter((video) => {
        return video.id.kind === 'youtube#video';
      });
      dispatch({ type: GET_VIDEOS, payload: filterOnlyVideos });
    } catch (error) {
      return;
    }
    return () => {
      controller.abort();
    };
  };

  // Selected Video
  const singleVideoSelect = (selected_video) => {
    dispatch({ type: GET_SELECTED_VIDEO, payload: selected_video });
  };

  const fetchRelatedVideos = async (videoId) => {
    const controller = new AbortController();
    const url = process.env.REACT_APP_YT_BASE_URL;
    try {
      const response = await axios.get(url, {
        params: {
          part: 'snippet',
          maxResults: 16,
          key: process.env.REACT_APP_YT_APIKEY,
          relatedToVideoId: videoId,
          type: 'video',
        },
        signal: controller.signal,
      });
      const items = response.data.items;
      console.log(items);

      dispatch({ type: GET_RELATED_VIDEOS, payload: items });
    } catch (error) {
      return;
    }
    return () => {
      controller.abort();
    };
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        fetchVideos,
        singleVideoSelect,
        fetchRelatedVideos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(GlobalContext);
};

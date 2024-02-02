import axios from 'axios';
import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
  loading?: boolean;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

function useAxios<T = unknown>(url?: string, config?: any): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    loading: true,
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading': {
        return { ...initialState, loading: true };
      }
      case 'fetched': {
        return { ...initialState, loading: false, data: action.payload };
      }
      case 'error': {
        return { ...initialState, loading: false, error: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) {
      return;
    }

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      // If a cache exists for this url, return it
      if (cache.current[`${url}`]) {
        dispatch({ type: 'fetched', payload: cache.current[`${url}`] });
        return;
      }

      try {
        const response = await axios.get<T>(url, config);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        const data: T = response.data;
        cache.current[`${url}`] = data;
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: 'error', payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

export default useAxios;

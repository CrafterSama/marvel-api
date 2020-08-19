import { useState, useEffect } from 'react'
import marvel from 'marvel-characters';
import useGetData from './useGetData'
import { useStateValue } from '../context'
import { PARAM_STARTS_WITH } from '../constants'
import { SET_CHARACTERS } from '../context/types'

const useMarvelData = (searchParam) => {

  const [, dispatch] = useStateValue()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const params = searchParam
    ? `${PARAM_STARTS_WITH}${searchParam}`
    : `${PARAM_STARTS_WITH}${marvel()}`;

  const getData = useGetData(params);

  useEffect(() => {
    if (loading) {
      const getMarvelData = async () => {
        setLoading(true);
        const newData = await getData();
        dispatch({
          type: SET_CHARACTERS,
          characters: newData.data.results,
        });
        setData(newData.data.results);
        setLoading(false);
      };
      getMarvelData();
    }
  }, [params]);

  return [data, loading];
};

export default useMarvelData;

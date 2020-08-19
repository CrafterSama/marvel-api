import { buildEndpoint, getData } from '../services/FechData';

const useGetData = (param) => {

  const fetchFunction = async () => {
    try {
      const url = (param) ? buildEndpoint(param) : buildEndpoint();

      const response = await getData(url);
      const data = await response.data;

      return data;

      // return data;
    } catch (error) {
      return error;
    }
  }

  return fetchFunction;
}

export default useGetData;

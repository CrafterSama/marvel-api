import { buildEndpoint, getData } from '../services/FechData';

const useGetData = (param) => {

  const fetchFunction = async () => {
    try {
      const url = (param) ? buildEndpoint(param) : buildEndpoint();

      const response = await getData(url);
      const data = await response.data;

      if(data.code === 200) {
        return data;
      } else {
        return { ...data, data: { results: []} };
      }
    } catch (error) {
      return error;
    }
  }

  return fetchFunction;
}

export default useGetData;

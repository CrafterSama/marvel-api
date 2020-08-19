import { buildEndpoint, getData } from '../services/FechData';

const useGetData = (params) => {

  console.log(params);

  const fetchFunction = async () => {
    try {
      const url = buildEndpoint(params);

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

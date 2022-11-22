import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { UnsplashResponse } from '../app.models';
const unsplashApi: () => AxiosInstance = () => {
  const baseURL: string = process.env['NX_UNSPLASH_API_BASE_URL'] as string;

  const clientId: string = process.env['NX_UNSPLASH_ACCESS_KEY'] as string;
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
  });
};

const isAccountAndEnvUnsplashCreated:()=> boolean = ()=>{
  const isDefined  = process.env['NX_UNSPLASH_API_BASE_URL'] !== undefined &&  process.env['NX_UNSPLASH_ACCESS_KEY'] !== undefined;
  return   isDefined ;
}

const unsplashApiGet: (term: string) => Promise<AxiosResponse<UnsplashResponse>> = async (term: string) => {
  const data: Promise<AxiosResponse<UnsplashResponse>> = unsplashApi().get('/search/photos', {params: { query: term }, }  );
  return await data;
};

export {isAccountAndEnvUnsplashCreated};
export default unsplashApiGet;
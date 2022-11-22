/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from "axios";

const youtubeApi: () => AxiosInstance = () => {
    const baseURL: string = process.env['NX_YOUTUBE_API_API_BASE_URL'] as string;
  
    const clientId: string = process.env['NX_YOUTUBE_API_KEY'] as string;
    return axios.create({
      baseURL,
      params:{
            part: 'snippet',
            maxResults: 5,
            key: clientId
      }
    });
  };

  const youtubeApiGet: (term: string) => Promise<AxiosResponse<any>> = async (term: string) => {
    const data: Promise<AxiosResponse<any>> = youtubeApi().get('/search/', {params: { q: term }, }  );
    return await data;
  };
export default youtubeApiGet;
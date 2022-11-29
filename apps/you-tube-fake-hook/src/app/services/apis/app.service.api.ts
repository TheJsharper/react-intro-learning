
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { YoutubeResponseData } from "../../models/app.youtube-api";

const youtubeApi: () => AxiosInstance = () => {
    const baseURL: string = process.env['NX_YOUTUBE_API_API_BASE_URL'] as string;
  
    const clientId: string = process.env['NX_YOUTUBE_API_KEY'] as string;
    return axios.create({
      baseURL,
      params:{
            part: 'snippet',
            maxResults: 50,
            key: clientId
      }
    });
  };

  const youtubeApiGet: (term: string) => Promise<AxiosResponse<YoutubeResponseData>> = async (term: string) => {
    const data: Promise<AxiosResponse<YoutubeResponseData>> = youtubeApi().get('/search/', {params: { q: term }, }  );
    return await data;
  };
export default youtubeApiGet;
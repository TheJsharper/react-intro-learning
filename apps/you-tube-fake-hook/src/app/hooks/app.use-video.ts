import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { YoutubeResponseData } from "../models/app.youtube-api";
import youtubeApiGet from "../services/apis/app.service.api";

const UseVideo = (defaultSearchTerm:string)=>{
    const [youtubeResponseData, setYoutubeResponseData] = useState<YoutubeResponseData | undefined>(undefined);

    useEffect(() =>{ (async ()=>await search(defaultSearchTerm))()}, [defaultSearchTerm]);


    const search = async (term: string) => {

        const youtubeApiResponse: AxiosResponse<YoutubeResponseData> = await youtubeApiGet(term);
    
        setYoutubeResponseData(youtubeApiResponse.data);
      }

    return {youtubeResponseData, search};
}

export default UseVideo;
import axios, { AxiosResponse } from "axios";
import { GoogleTranslate } from "../models/app.google-translate";






const googleTranslateApiPost: ({ language, text }: { language: string, text: string }) => Promise<AxiosResponse<GoogleTranslate>> = async ({ language, text }: { language: string, text: string }) => {

  const baseURL: string = process.env['NX_TRANSLATE_GOOGLEAPIS_BASE_URL'] as string;
  const key: string = process.env['NX_TRANSLATE_GOOGLEAPIS_API_KEY'] as string;
  const params = {
    q: text,
    target: language,
    key
  };

  const data: Promise<AxiosResponse<GoogleTranslate>> = axios.post(baseURL, {}, { params });
  return await data;
};

export default googleTranslateApiPost;
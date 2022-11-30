import axios, { AxiosInstance } from "axios";

const getJsonPlaceholderInstance = () => {

    const jsonPlaceholder: AxiosInstance = axios.create({
        baseURL: process.env['NX_JSON_PLACEHOLDER_API_BASE_URL'] as string
    });
    return jsonPlaceholder;
}
export default getJsonPlaceholderInstance;
/* eslint-disable @typescript-eslint/no-explicit-any */
import getJsonPlaceholderInstance from "../services/app.jsonplaceholder.service";

export const fetchPosts = () => async (dispatch: any) => {

    const data = await getJsonPlaceholderInstance().get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: data.data });


}
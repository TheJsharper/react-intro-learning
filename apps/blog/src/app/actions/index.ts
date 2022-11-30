/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from "../models/app.json-placeholder.models";
import getJsonPlaceholderInstance from "../services/app.jsonplaceholder.service";

import { memoize } from 'lodash';
export const fetchPosts = () => async (dispatch: any) => {

    const response = await getJsonPlaceholderInstance().get<Post[]>('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });


}
export const fetchUser = (id:number) => async (dispatch:any)=> _memoizedFetchUser(id, dispatch);



const _memoizedFetchUser = memoize(async(id:number, dispatch:any )=>{
    const response = await getJsonPlaceholderInstance().get<Post[]>(`/users/${id}`);

    dispatch({type:'FETCH_USER', payload:response.data});
});




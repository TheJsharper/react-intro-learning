/* eslint-disable @typescript-eslint/no-explicit-any */
import { map, uniq } from "lodash";
import { Post } from "../models/app.json-placeholder.models";
import { AppState } from "../models/app.state";
import getJsonPlaceholderInstance from "../services/app.jsonplaceholder.service";


export const fetchPostsAndUsers = () => async (dispatch: any, getState: () => AppState) => {
    await dispatch(fetchPosts());
    const currentState: AppState = getState();

    const userIds: number[] = uniq(map(currentState.posts, 'userId'));
    
    userIds.forEach((id:number)=>  dispatch(fetchUser(id)));
    
}


export const fetchPosts = () => async (dispatch: any) => {

    const response = await getJsonPlaceholderInstance().get<Post[]>('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });


}
export const fetchUser = (id: number) => async (dispatch: any) => {
    const response = await getJsonPlaceholderInstance().get<Post[]>(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });

}



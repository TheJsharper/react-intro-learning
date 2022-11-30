/* eslint-disable @typescript-eslint/no-explicit-any */
import { chain } from "lodash";
import { ThunkDispatch } from "redux-thunk";
import { Post, User } from "../models/app.json-placeholder.models";
import { AppState, PostAction, UserAction } from "../models/app.state";
import getJsonPlaceholderInstance from "../services/app.jsonplaceholder.service";


export const fetchPostsAndUsers = () => async (dispatch: ThunkDispatch<AppState, void, UserAction & PostAction>, getState: () => AppState) => {

    await dispatch(fetchPosts());

    chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id: number) => dispatch(fetchUser(id)))
        .value();

}


export const fetchPosts = () => async (dispatch: ThunkDispatch<AppState, void, PostAction>) => {

    const response = await getJsonPlaceholderInstance().get<Post[]>('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });


}
export const fetchUser = (id: number) => async (dispatch: ThunkDispatch<AppState, void, UserAction>) => {

    const response = await getJsonPlaceholderInstance().get<User>(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });

}



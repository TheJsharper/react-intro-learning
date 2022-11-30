/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from "../models/app.json-placeholder.models";
import { PostAction } from "../models/app.state";

export const postsReducer = (state: Post[] = [], action: PostAction) => {

    switch (action.type) {

        case 'FETCH_POSTS':
            return action.payload;

        default:
            return state;
    }
}


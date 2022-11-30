import { Post, User } from "./app.json-placeholder.models";

export interface AppState {
  posts: Post[];
  users: Array<User>
}

export interface UserAction {
  type: string;
  payload: User;
}


export interface PostAction {
  type: string;
  payload: Array<Post>;
}
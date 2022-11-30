import React from "react";
import {connect} from 'react-redux';
import { fetchPosts } from "../actions";
import { Post } from "../models/app.json-placeholder.models";
import { AppState } from "../models/app.state";
import  UserHeader  from "./app.user-header";

class PostList extends React.Component<{fetchPosts: ()=>Promise<void>, posts:Post[]}>{

    override componentDidMount(): void {
        this.props.fetchPosts();
        
    }

    private renderListOfPosts ():JSX.Element[]{
        return this.props.posts.map((post:Post)=> (
            <div className="item" key={post.id}>
                 <i className="large middle aligned icon user" />
                 <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader {...{id:post.userId}} />
                 </div>   
            </div>
        ))
    }
    override render(): React.ReactNode {
        return (
            <div className="ui relaxed divided list">
                {this.renderListOfPosts()}
            </div>
        )
    }
}
const mapStateToProps = (state:AppState)=> ({posts:state.posts});
export default connect(mapStateToProps, {fetchPosts})( PostList);

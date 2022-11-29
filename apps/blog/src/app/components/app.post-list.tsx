import React from "react";
import {connect} from 'react-redux';
import { fetchPosts } from "../actions";

class PostList extends React.Component<{fetchPosts: ()=>Promise<void>}>{

    override componentDidMount(): void {
        this.props.fetchPosts();
    }
    override render(): React.ReactNode {
        return (
            <div>Post List</div>
        )
    }
}
export default connect(null, {fetchPosts})( PostList);

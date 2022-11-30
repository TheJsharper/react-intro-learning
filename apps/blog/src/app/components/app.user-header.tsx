import React from "react";

import { connect } from 'react-redux';
import { fetchUser } from "../actions";
import { User } from "../models/app.json-placeholder.models";
import { AppState } from "../models/app.state";

interface UserHeaderProps {
    id: number;
    fetchUser?: (id: number) => Promise<void>;
    user?: User | undefined;
}


class UserHeader extends React.Component<UserHeaderProps>{


    override componentDidMount(): void {

        if (this.props.fetchUser)
            this.props.fetchUser(this.props.id);


    }

    override render(): React.ReactNode {

        return (

            <div className="header">UserHeader{this.props.user?.name}</div>
        )
    }

}


const mapStateToProps = (state: AppState, ownProps: UserHeaderProps) => ({ ...ownProps, user: state.users.find((user: User) => user.id === ownProps.id) });

export default connect(mapStateToProps, { fetchUser })(UserHeader)
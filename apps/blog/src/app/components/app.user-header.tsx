import React from "react";

import { connect } from 'react-redux';
import { User } from "../models/app.json-placeholder.models";
import { AppState } from "../models/app.state";

interface UserHeaderProps {
    id: number;
    user?: User | undefined;
}


class UserHeader extends React.Component<UserHeaderProps>{



    override render(): React.ReactNode {

        return (

            <div className="header">{this.props.user?.name}</div>
        )
    }

}

const mapStateToProps = (state: AppState, ownProps: UserHeaderProps) => ({ ...ownProps, user: state.users.find((user: User) => user.id === ownProps.id) });

export default connect(mapStateToProps)(UserHeader)
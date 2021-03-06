import React from 'react';
import '../containers/App.css';
import {connect} from "react-redux"
import {usersFetchData} from "../actions/users.js";
import UsersListTable from "../Pages/users-page/UsersListTable";
import UsersCreateForm from "../Pages/users-page/UsersCreateForm";
import UsersBanner from "../Pages/users-page/UsersBanner";

/*import {connectTo} from '../ws/ws'*/


class App extends React.Component {
    componentDidMount() {
        this.props.fetchData("http://localhost:8080/users");
    }

    render() {
        return (
            <div>
                <div className="header-users">
                    <UsersBanner/>
                </div>
                <div className="list-users">
                    <UsersListTable/>
                </div>
                <div className="create-user">
                    <UsersCreateForm/>
                </div>
            </div>
        );
    }
}

/*connectTo();*/

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(usersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

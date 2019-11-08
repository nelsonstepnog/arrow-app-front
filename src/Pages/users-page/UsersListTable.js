import React from 'react';
import {usersFetchData} from "../../actions/users.js";
import {connect} from "react-redux";
import form from "@jest/fake-timers/build/jestFakeTimers";
import ReloadPage from "../../components/ReloadPage";

/*import {sendUsers} from "./ws/ws";*/


class UsersListTable extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            age: '',
            country: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let id = target.id;
        this.setState({
            [id]: value
        });
        this.setState({
            id: event.target.value
        });
    }

    render() {

        const handleUpdateUser = id => {
            fetch('http://localhost:8080/users/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        age: this.state.age,
                        country: this.state.country
                    })
                }
            ).then(result => result.json()).then(data => console.log(data)).catch(err => console.log(err));
            ReloadPage.handleList();
        };

        const handleDeleteUser = id => {
            let answer = window.confirm('Вы уверены, что хотите удалить пользователя?');
            if (answer) {
                fetch('http://localhost:8080/users/' + id,
                    {method: 'DELETE'}).then(result => console.log(result));
                ReloadPage.handleList();
            }
        };

        return (
            <div className="users-list-table">
                <table className="table table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Возраст</th>
                        <th scope="col">Страна</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((user => {
                        return <tr key={user.id}>
                            <th className="id-user-td" scope="row">{user.id}</th>
                            <td className="name-td">{user.name}</td>
                            <td className="age-td">{user.age}</td>
                            <td className="country-td">{user.country}</td>
                            <td className="actions-td">
                                <div className="edit-user-icon">
                                    <ion-icon name="create" id="edit-user-icon" data-toggle="modal"
                                              data-target="#edit-user-modal"
                                              data-whatever="edit-user" /*onClick={() => {this.props.users.map((user => { return <tr key={user.id}/>}))}}*/
                                    />
                                    <div className="modal fade" id="edit-user-modal" tabIndex="-1" role="dialog"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Редактировать
                                                        пользователя</h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-user-name"><br/>
                                                            <label className="label-name">Имя пользователя</label><br/>
                                                            <input type="text" className="form-control" id="name"
                                                                   value={this.state.name}
                                                                   onChange={this.handleChange}
                                                                   placeholder="Введите имя"/>
                                                        </div>
                                                        <div className="form-user-age"><br/>
                                                            <label className="label-age">Возраст</label><br/>
                                                            <input type="text" className="form-control" id="age"
                                                                   value={this.state.age}
                                                                   onChange={this.handleChange}
                                                                   placeholder="Введите возраст"/>
                                                        </div>
                                                        <br/>
                                                        <div className="form-user-country">
                                                            <label className="label-country">Страна</label><br/>
                                                            <input type="text" className="form-control" id="country"
                                                                   value={this.state.country}
                                                                   onChange={this.handleChange}
                                                                   placeholder="Введите страну"/>
                                                        </div>
                                                        <br/>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-dismiss="modal"
                                                            id="btn-create-user-cancel">Отмена
                                                    </button>
                                                    <button type="button" className="btn btn-primary"
                                                            id="btn-update-user" data-dismiss="modal"
                                                            onClick={() => handleUpdateUser(user.id)}>Редактировать
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="delete-user-icon">
                                    <ion-icon name="close" id="delete-user-icon"
                                              onClick={() => handleDeleteUser(user.id)}/>
                                </div>
                            </td>
                        </tr>
                    }))
                    }
                    <tr>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersListTable);

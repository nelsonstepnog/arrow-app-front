import React from 'react';
import form from "@jest/fake-timers/build/jestFakeTimers";

class UsersCreateForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            country: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancelReset = this.handleCancelReset.bind(this);
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

    handleList() {
        fetch('http://localhost:8080/users').then(result => result.json()).then(data => console.log(data)).catch(err => console.log(err));
        setTimeout("window.location.reload()", 500);
    };

    handleSubmit() {
        fetch('http://localhost:8080/users/',
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    age: this.state.age,
                    country: this.state.country
                })
            }
        ).then(result => result.json()).then(data => console.log(data)).catch(err => console.log(err));
        this.setState({
            name: '',
            age: '',
            country: '',
        });
        this.handleList();
    }

    handleCancelReset() {
        this.setState({
            name: '',
            age: '',
            country: '',
        });
    }

    render() {
        return (
            <div className="users-create-form">
                <div className="button-user-create">
                    <button type="button" className="btn btn-primary" id="create-user-btn" data-toggle="modal"
                            data-target="#create-user-modal"
                            data-whatever="create-user">Добавить пользователя
                    </button>
                </div>

                <div className="modal fade" id="create-user-modal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Создать пользователя</h5>
                                <button type="button" className="close" id="create-close-cross" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-user-name"><br/>
                                        <label className="label-name">Имя пользователя</label><br/>
                                        <input type="text" className="form-control" id="name" value={this.state.name}
                                               onChange={this.handleChange}
                                               placeholder="Введите имя"/>
                                    </div>
                                    <div className="form-user-age"><br/>
                                        <label className="label-age">Возраст</label><br/>
                                        <input type="text" className="form-control" id="age" value={this.state.age}
                                               onChange={this.handleChange}
                                               placeholder="Введите возраст"/>
                                    </div>
                                    <br/>
                                    <div className="form-user-country">
                                        <label className="label-country">Страна</label><br/>
                                        <input type="text" className="form-control" id="country"
                                               value={this.state.country} onChange={this.handleChange}
                                               placeholder="Введите страну"/>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                        id="btn-create-user-cancel" onClick={this.handleCancelReset}>Отмена
                                </button>
                                <button type="button" className="btn btn-primary" id="btn-create-user"
                                        data-dismiss="modal"
                                        onClick={this.handleSubmit}>Создать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersCreateForm;

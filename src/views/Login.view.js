import React, {Component} from "react";
import {withHookUseForm} from '../hocs/withHookUseForm';
import {Controller} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';

class LoginView extends Component{
    constructor(props) {
        super(props);

        this.register = this.props.register;
        this.handleSubmit = this.props.handleSubmit;
        this.control = this.props.control;
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(data) {
        console.log(data);
        this.props.history.push('/main');
    }
    render() {
        return (
            <div className="auth-wrapper">
                <div className="p-col-12 p-md-6 p-lg-3 p-shadow-6 auth-inner">
                    <form onSubmit={this.handleSubmit(this.onSubmit)} className="p-p-3">
                        <h3>Авторизация</h3>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="login">Логин</label>
                                <Controller
                                    name="login"
                                    type="text" id="login"
                                    control={this.control}
                                    as={InputText}
                                    rules={{
                                        required: 'Обязательно для заполнения!',
                                    }}
                                    defaultValue=""
                                />
                                <ErrorMessage
                                    errors={this.props.errors}
                                    name="login"
                                    as={<small id="username-help" className="p-invalid">Username is not available.</small>}
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="password">Пароль</label>
                                <Controller
                                    name="password"
                                    type="password" id="password"
                                    control={this.control}
                                    as={InputText}
                                    rules={{
                                        required: 'Обязательно для заполнения!',
                                    }}
                                    defaultValue=""
                                />
                                <ErrorMessage
                                    errors={this.props.errors}
                                    name="password"
                                    as={<small id="password-help" className="p-invalid">Username is not available.</small>}
                                />
                            </div>
                        </div>

                        <Button label="Войти" className="p-col-12 p-mt-3"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withHookUseForm(LoginView);
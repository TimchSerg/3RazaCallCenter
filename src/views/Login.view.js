import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withHookUseForm} from '../hocs/withHookUseForm';

import { InputText } from 'primereact/inputtext';

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
    }
    render() {
        return (
            <div>
                <h1>LoginView</h1>

                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/registration">registration</Link></li>
                    <li><Link to="/main">main</Link></li>
                </ul>
                <div>
                    <form onSubmit={this.handleSubmit(this.onSubmit)}>
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withHookUseForm(LoginView);
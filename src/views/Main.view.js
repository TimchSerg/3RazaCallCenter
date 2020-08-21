import React, {Component} from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

class MainView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visibleLeft: false,
        };
    }
    render() {
        return (
            <div className="layout-container menu-layout-static">
                <div className="topbar clearfix">
                    <div className="topbar-left">
                        <div className="logo"></div>
                    </div>
                    <div className="topbar-right">
                        <Button icon="pi pi-arrow-right" onClick={() => this.setState({ visibleLeft: true })} />
                    </div>
                </div>
                <div className="card">
                    <Sidebar className="layout-menu" visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({ visibleLeft: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>
                </div>
            </div>
        )
    }
}

export default MainView;
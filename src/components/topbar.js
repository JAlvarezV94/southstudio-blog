import React from 'react';
import './topbar.css';
import './topbar.mobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TopBar extends React.Component{


    render() {
        return(
            <div className="topbar">
                <div className="menu-sh-button" onClick={this.props.topBar.onClick}>
                    <FontAwesomeIcon icon={this.props.topBar.icon}/>
                </div>
                <h1>{this.props.topBar.title}</h1>
            </div>
        );
    }
}
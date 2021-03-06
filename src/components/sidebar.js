import React from 'react';
import './sidebar.css';
import './sidebar.mobile.css';
import Logo from '../imgs/sunset.svg';
import Menu from './menu';

export default class SideBar extends React.Component{
    render(){
        return (
            <div id="ssbSideBar" className="sidebar">

                <img alt="South Studio Logo" src={Logo}/>

                <Menu buttons={this.props.buttons}/>
            </div>
        );
    }
}
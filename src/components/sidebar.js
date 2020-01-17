import React from 'react';
import './sidebar.css';
import Logo from '../imgs/sunset.svg';
import Menu from './menu';

export default class SideBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            buttons: [{text: "Home", icon: "home"}, {text: "About me", icon: "user"}],
        }
    }

    render(){
        return (
            <div className="sidebar">

                <img alt="South Studio Logo" src={Logo}/>

                <Menu buttons={this.state.buttons}/>
            </div>
        );
    }
}
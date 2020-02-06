import React from 'react';
import './topbar.css';
import './topbar.mobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TopBar extends React.Component{


    render() {

        this.detectClickOutMenu();

        return(
            <div className="topbar">
                <div className="menu-sh-button" onClick={this.props.topBar.onClick}>
                    <FontAwesomeIcon icon={this.props.topBar.menuIcon}/>
                </div>
                <h1>{this.props.topBar.title}</h1>
                <button id="adminMenuButton" className="admin-menu-button" onClick={() => {this.showHideMenu()}}>
                    <FontAwesomeIcon icon={this.props.topBar.gearIcon}/>
                    <div id="adminMenuContainer" className="admin-menu-container">
                        <ul className="admin-menu">
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={this.props.topBar.adminIcon}/> Admin Panel
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={this.props.topBar.logoutIcon}/> Sign out
                                </span>
                            </li>
                        </ul>
                    </div>
                </button>
            </div>
        );
    }


    detectClickOutMenu(){
        window.addEventListener('click', function (e) {
            var menuContainer = document.getElementById("adminMenuContainer");
            var menuButton = document.getElementById("adminMenuButton");

            if(menuContainer.style.display === "block" && !menuButton.contains(e.target)){
                menuContainer.style.display = "none";
            }
        });
    }

    showHideMenu(){
        var menuContainer = document.getElementById("adminMenuContainer");

        if(menuContainer.style.display !== "block")
            menuContainer.style.display = "block";
        else
            menuContainer.style.display = "none";
    }
}
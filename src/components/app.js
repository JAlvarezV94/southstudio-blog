import React from 'react';
import './app.css';
import SideBar from './sidebar';
import TopBar from './topbar';
import MainContainer from './maincontainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome, faBars, faTimes, faCog, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            currentPage: {
                content: 1,
            },
            topBar:{ 
                title: "South Studio", 
                menuIcon: "bars", 
                gearIcon: "cog",
                logoutIcon: "sign-out-alt",
                adminIcon: "user-cog",
                sidebarHiden: true,
                onClick: this.showHideSidebar.bind(this)
            },
            postCard: {
                id: 3,
                onClick: this.onButtonClick.bind(this),
            },
            postToShow: 0,
            buttons: [
                {id: 1, text: "Home", icon: "home", onClick: this.onButtonClick.bind(this)}, 
                {id: 2, text: "About me", icon: "user", onClick: this.onButtonClick.bind(this)}
            ],
        }
    }

    render(){
        library.add(faUser, faHome, faBars, faTimes, faCog, faSignOutAlt, faUserCog);

        return (
            <div className="app">
                <SideBar buttons={this.state.buttons}/>

                <div className="app-container">
                    <TopBar topBar={this.state.topBar}/>
                    <MainContainer 
                        content={this.state.currentPage.content} 
                        postCard={this.state.postCard}
                        postToShow={this.state.postToShow}/>
                </div>
            </div>
        );
    }

    onButtonClick(currentButton, postId) {
        if(currentButton === 1 || currentButton === 2){
            this.setState({currentPage: {
                    content: currentButton === 1 ? 1 : 2,
                }
            });
        }else if(currentButton === 3){
            this.setState({currentPage: {
                    content: currentButton,
                },
                postToShow: postId,
            })
        }
    }

    showHideSidebar(){
        let hideBar = this.state.topBar.sidebarHiden ? false : true;
        let iconToShow = this.state.topBar.sidebarHiden ? "times" : "bars";

        this.setState({
            topBar: {
                sidebarHiden: hideBar,
                menuIcon: iconToShow, 
                gearIcon: "cog",
                logoutIcon: "sign-out-alt",
                adminIcon: "user-cog",
                title: "South Studio",
                onClick: this.showHideSidebar.bind(this)
            }
        });

        if(this.state.topBar.sidebarHiden){
            let sidebar = document.getElementById("ssbSideBar");
            let pos = 100;
            let id = window.setInterval(showBarFun, 5);

            function showBarFun(){
                if(pos === 0){
                    window.clearInterval(id);
                }else{
                    pos--;
                    if(pos > 0)
                        sidebar.style.left = "-" + pos + "%";
                    else
                        sidebar.style.left = 0;
                }
            }
        }else{
            let sidebar = document.getElementById("ssbSideBar");
            let pos = 0;
            var id = window.setInterval(hideBarFun, 5);

            function hideBarFun(){
                if(pos === 100){
                    window.clearInterval(id);
                }else{
                    pos++;
                    sidebar.style.left = "-" + pos + "%";
                }
            }
        }

    }
}
import React from 'react';
import './app.css';
import SideBar from './sidebar';
import TopBar from './topbar';
import MainContainer from './maincontainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            currentPage: {
                title: "South Studio",
                content: 1
            },
            buttons: [
                {id: 1, text: "Home", icon: "home", onClick: this.onButtonClick.bind(this)}, 
                {id: 2, text: "About me", icon: "user", onClick: this.onButtonClick.bind(this)}
            ],
        }
    }

    render(){
        library.add(faUser, faHome);

        return (
            <div className="app">
                <SideBar buttons={this.state.buttons}/>

                <div className="app-container">
                    <TopBar title={this.state.currentPage.title}/>
                    <MainContainer content={this.state.currentPage.content}/>
                </div>
            </div>
        );
    }

    onButtonClick(currentButton) {
        this.setState({currentPage: {
                content: currentButton === 1 ? 1 : 2,
                title: "South Studio",
            }
        });
    }
}
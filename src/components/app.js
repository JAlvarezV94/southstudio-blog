import React from 'react';
import './app.css';
import SideBar from './sidebar';
import TopBar from './topbar';
import MainContainer from './maincontainer';

export default class App extends React.Component{


    render(){
        return (
            <div className="app">
                <SideBar/>

                <TopBar/>

                <MainContainer/>
            </div>
        );
    }
}
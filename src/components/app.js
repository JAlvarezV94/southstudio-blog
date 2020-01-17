import React from 'react';
import './app.css';
import SideBar from './sidebar';
import TopBar from './topbar';
import MainContainer from './maincontainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component{
   
    render(){
        library.add(faUser, faHome);

        return (
            <div className="app">
                <SideBar/>

                <TopBar/>

                <MainContainer/>
            </div>
        );
    }
}
import React from 'react';
import DummyData from '../data/dummydata';
import ProfilePic from "../imgs/profile.jpg"
import './aboutme.css';

export default class AboutMe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            aboutMe: DummyData.GetAboutMe()
        }
    }

    render(){
        return(
            <div>
                <div className="profile-img-container">
                    <img alt="profile pic" src={ProfilePic}/>
                </div>
                <h2>{this.state.aboutMe.Name}</h2>
                <h3>A.K.A. -> {this.state.aboutMe.Aka}</h3>
                <p>{this.state.aboutMe.About}</p>
            </div>
        );
    }
}
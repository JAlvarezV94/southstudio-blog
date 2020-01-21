import React from 'react';
import './maincontainer.css';
import PostCard from './postcard';
import GetPostList from '../data/dummydata';

export default class MainContainer extends React.Component{

    render() {
        return (
            <div className="main-container">
                
                <div>
                    {this.contentToShow(this.props.content)}
                </div>
            </div>
        );
    }

    contentToShow(contentId){
        var content;

        switch(contentId){
            case 1:
                var dummyData = GetPostList();
                content = <PostCard Title={dummyData[0].Title} TextContent={dummyData[0].Content}/>
                break;
            case 2:
                break;
            default:
                break;
        }

        return content;
    }
}
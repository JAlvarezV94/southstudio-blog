import React from 'react';
import './maincontainer.css';
import './maincontainer.mobile.css';
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
                content = this.buildPostList(dummyData);
                break;
            case 2:
                break;
            default:
                break;
        }

        return content;
    }

    buildPostList(postList){
        return (
            <ul className="post-list">
                {
                    postList.map((item) => {
                        return <PostCard Title={item.Title} TextContent={item.Content}/>
                    })
                }
            </ul>
        )
    }
}
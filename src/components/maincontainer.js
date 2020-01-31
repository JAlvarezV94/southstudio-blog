import React from 'react';
import './maincontainer.css';
import './maincontainer.mobile.css';
import PostCard from './postcard';
import PostView from './postview';
import GetPostList from '../data/dummydata';

export default class MainContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            postList: GetPostList()
        }
    }
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
                content = this.buildPostList(this.state.postList);
                break;
            case 2:
                break;
            case 3:
                var postToShow = this.state.postList.find(current => current.IdPost === this.props.postToShow)                
                content = <PostView currentPost={postToShow}/>
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
                        return <PostCard key={item.IdPost} post={item} onClick={this.props.postCard.onClick}/>
                    })
                }
            </ul>
        )
    }
}
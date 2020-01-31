import React from 'react';
import './postview.css';

export default class PostView extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.currentPost.Title}</h1>

                <p>
                    {this.props.currentPost.Content}
                </p>
            </div>
        );
    }
}
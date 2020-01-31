import React from 'react';
import './postcard.css';

function PostCard(props) {
    return(
        <div className="post-card" key={props.post.IdPost} onClick={() => {props.onClick(3, props.post.IdPost)}}>
            <div className="read-post-message">
                <p>Leer post...</p>
            </div>
            <div className="triangle"></div>
            <h2 className="post-title">
                {props.post.Title}
            </h2>
        </div>
    );
}

export default PostCard;
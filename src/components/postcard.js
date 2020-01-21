import React from 'react';
import './postcard.css';

function PostCard(props) {
    return(
        <div className="post-card">
            <div className="read-post-message">
                <p>Leer post...</p>
            </div>
            <div className="triangle"></div>
            <h2 className="post-title">
                {props.Title}
            </h2>
        </div>
    );
}

export default PostCard;
import React from 'react';

const SocialMediaIcon = (props) => {
    return (
        <a className="social-media-icon" href={props.url} target="_blank" rel="noopener noreferrer" alt={props.alt} >
            <props.logo />
            <div className="spark-1 spark"></div>
            <div className="spark-2 spark"></div>
            <div className="spark-3 spark"></div>
        </a>
    )
}

export default SocialMediaIcon;
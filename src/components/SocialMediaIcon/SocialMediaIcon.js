import React from 'react';

const SocialMediaIcon = (props) => {
    return (
        <a className="social-media-icon" href={props.url} target="_blank" rel="noopener noreferrer" alt={props.alt} >
            <props.logo />
        </a>
    )
}

export default SocialMediaIcon;
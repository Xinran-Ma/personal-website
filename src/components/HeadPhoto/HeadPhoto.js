import React from 'react'

import head_shot from '../../images/WechatIMG6.jpg';

const HeadPhoto = (props) => {
    return (
        <div className="head-photo">
            <img className="photo" src={head_shot} alt="Ray Ma's Head Shot" />
        </div>
    )
}

export default HeadPhoto;
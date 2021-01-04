import React from 'react';

import HeadPhoto from '../HeadPhoto/HeadPhoto';
import WelcomeMSG from '../WelcomeMSG/WelcomeMSG';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';

import {ReactComponent as linkedin_logo} from '../../images/linkedin.svg';
import {ReactComponent as github_logo} from '../../images/github.svg'

const MainPageContainer = (props) => {
    let class_name = 'main-page-container display';

    if ( props.active === 'hide' ) {
        class_name = 'main-page-container hide';
    }
    
    return (
        <div className={class_name}>
            <div className="left-area-container">
                <HeadPhoto />
                <div className="social-media-icons">
                    <SocialMediaIcon url="https://www.linkedin.com/in/xinran-ma/" logo={linkedin_logo} alt="Xinran's LinkedIn" />
                    <SocialMediaIcon url="https://github.com/Xinran-Ma" logo={github_logo} alt="Xinran's Github" />
                </div>
            </div>
            <div className="middle-area-container">
                <WelcomeMSG />
            </div>
            <div className="right-area-container">
                {/* the scroll bar */}
            </div>
        </div>
    )
}

export default MainPageContainer
import React from 'react';

import HeadPhoto from '../HeadPhoto/HeadPhoto';

const MainPageContainer = (props) => {
    let class_name = 'main-page-container display';

    if ( props.active === 'hide' ) {
        class_name = 'main-page-container hide';
    }
    
    return (
        <div className={class_name}>
            <div className="left-area-container">
                <HeadPhoto />
            </div>
            <div className="middle-area-container"></div>
            <div className="right-area-container">
                {/* the scroll bar */}
            </div>
        </div>
    )
}

export default MainPageContainer
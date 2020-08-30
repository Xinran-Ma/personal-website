import React from 'react';

const PageLoader = (props) => {
    let class_name = 'page-loader';

    if ( props.active === 'hide' ) {
        class_name = 'page-loader hide';
    }
    return (
        <div className={class_name}>
            <div className="page-loader__container">
                <div className="loading-msg">Loading<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></div>
                <div className="progress-bar">
                    <div className="current-progress"></div>
                </div>
            </div>
        </div>
    )
}



export default PageLoader;
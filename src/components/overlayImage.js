import React from 'react';
import cityBkg from '../assets/city-backdrop.jpg';

import './overlayImage.css';

class OverlayImage extends React.Component {
    render() {
        return (
            <div id="overlay-image">
                <img src={cityBkg} alt="main content" />
                {this.props.children}
            </div>
        );
    }
}

export default OverlayImage;
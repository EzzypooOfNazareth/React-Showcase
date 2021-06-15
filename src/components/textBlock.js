import React from 'react';

import './textBlock.css';

class TextBlock extends React.Component {
    render() {
        return (
            <div className="text-block">
                {this.props.children}
            </div>
        );
    }
}

export default TextBlock;
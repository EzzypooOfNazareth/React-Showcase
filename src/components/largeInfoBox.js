import React from 'react';
import './largeInfoBox.css';

class LargeInfoBox extends React.Component {
    constructor() {
        super();

        this.state = {
            scrollDistance: 0,
            left: 175
        }

        this.resizeHandler = this.resizeHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ scrollDistance: window.scrollY });
        })

        window.onresize = this.resizeHandler;
    }

    resizeHandler() {
        if (window.innerWidth !== undefined) {
            if (window.innerWidth < 1000) {
                this.setState({ left: 50 });
            } else {
                this.setState({ left: 175 });
            }
        }
    }

    render() {
        return (
            <div id="info-box-container" style={{ left: `${this.state.left - (this.state.scrollDistance * 5)}px` }}>
                <h3>This is React.</h3>
                <p>
                    React is a JavaScript framework for creating beautiful and responsive UI.
                    Tired of Angular's complexity? Sick of Flutter's lack of community support?
                    Try React for your next project and learn just how simple it is to create
                    eye-catching user interfaces.
                </p>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="link-as-button">Learn More</a>
            </div>
        );
    }
}

export default LargeInfoBox;
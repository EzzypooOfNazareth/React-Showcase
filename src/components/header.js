import React from 'react';
import './header.css';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            timeFrame: "Morning",
            isTop: true
        }
    }

    componentDidMount() {
        this.setState({ timeFrame: this.getTimeFrame() });

        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
            }
        });
    }

    getTimeFrame() {
        const d = new Date();
        const hours = d.getHours();

        if (hours >= 0 && hours < 11) {
            return "Morning";
        }
        else if (hours >= 11 && hours < 15) {
            return "Afternoon";
        }
        else {
            return "Evening";
        }
    }

    render() {
        return (
            <header id="site-header" className={ this.state.isTop ? "site-header-at-top" : "" }>
                <div className={ "title-container " + (this.state.isTop ? "title-container-at-top" : "") }>
                    <h1 className={ "title " + (this.state.isTop ? "title-at-top" : "") }>
                        React Showcase
                    </h1>
                </div>

                <p className={ "greeting " + (this.state.isTop ? "greeting-at-top" : "") }>
                    Good {this.state.timeFrame}!
                </p>
            </header>
        );
    }
}

export default Header;
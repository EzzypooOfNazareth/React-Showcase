import React from 'react';
import { Link } from 'react-router-dom';
import FBIcon from '../icons/fbIcon';
import InstaIcon from '../icons/instaIcon';
import TwitIcon from '../icons/twitIcon';

import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer id="site-footer">
                <div id="site-links">
                    <h1>Site Links</h1>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Samples</Link>
                </div>

                <div id="react-links">
                    <h1>React Documentation</h1>
                    <a href="https://reactjs.org/docs/getting-started.html">Documentation Home</a>
                    <a href="https://reactjs.org/docs/getting-started.html#learn-react">Learn React</a>
                    <a href="https://reactjs.org/docs/state-and-lifecycle.html">State {"&"} Lifecycle</a>
                    <a href="https://reactjs.org/docs/handling-events.html">Event Handling</a>
                    <a href="https://reactjs.org/docs/release-channels.html">Releases</a>
                </div>

                <div id="social-icons">
                    <FBIcon />
                    <InstaIcon />
                    <TwitIcon />
                </div>
            </footer>
        );
    }
}

export default Footer;
import React from 'react';
import OverlayImage from '../components/overlayImage';
import LargeInfoBox from '../components/largeInfoBox';
import CodeExample from '../components/codeExample';
import TextBlock from '../components/textBlock';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <OverlayImage>
                    <LargeInfoBox />
                </OverlayImage>
                <div className="main-content">
                    <TextBlock>
                        <h1>Simple is Beautiful</h1>
                        <p>
                            React is simple and can be used as a library
                            or a full framework. Components can be functions that
                            return JSX, or ES6 classes with each style having
                            its own advantages. The JSX templating engine is very
                            similar to HTML meaning that you don't have to learn 
                            anything new to use React! React is just JavaScript, 
                            this is what makes it so simple and user friendly. 
                            Look at the example below of a React component to see 
                            just how easy it is to get started.
                        </p>
                    </TextBlock>

                    <CodeExample />

                    <TextBlock>
                        <h1>Easy Integration</h1>
                        <p>
                            Whether you want to add React as a library to your
                            existing site, or create a full single page application
                            from scratch, there is always an easy way to include React! 
                            Try including the CDN scripts below to an existing site, 
                            then read how to start creating components with <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">
                                React's Documentation
                            </a>.
                        </p>
                        <div className="pre-container">
                            <pre>{"<script src='https://unpkg.com/react@17/umd/react.development.js' crossorigin></script>"}</pre>
                            <pre>{"<script src='https://unpkg.com/react-dom@17/umd/react-dom.development.js' crossorigin></script>"}</pre>
                        </div>
                    </TextBlock>
                </div>
            </div>
        );
    }
}

export default HomePage;
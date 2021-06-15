import React from 'react';
import './codeExample.css';

class CodeExample extends React.Component {
    render() {
        return (
            <div id="code-example">
                <div className="code-half">
                    <h1 style={{fontSize: "18px", color: "#f6f6f6", margin: "0"}}>Code:</h1>
                    <p>
                        <span className="coral">import</span> <span className="blue">React</span> from <span className="brown">'react'</span>;
                        <br />
                        <br />
                        <span className="blue">class</span> <span className="green">Example</span> <span className="blue">extends</span> <span className="green">React.Component</span> {"{"} <br />
                        &emsp; <span className="blue">state</span> = {"{"} <br />
                        &emsp; &emsp; <span className="blue">userName:</span> {"'John Doe'"} <br />
                        &emsp; {"}"} <br /><br />
                        &emsp; <span className="yellow">render</span>() {"{"} <br />
                        &emsp; &emsp; <span className="coral">return</span> ( <br />
                        &emsp; &emsp; &emsp; {"<p>Hello, {"}<span className="coral">this</span>.<span className="blue">state</span>.<span className="blue">userName</span>{"}</p>"} <br />
                        &emsp; &emsp; ); <br />
                        &emsp; {"}"} <br />
                        {"}"}
                    </p>
                </div>
                <div className="result-half">
                    <h1 style={{fontSize: "18px", color: "#333333", margin: "0"}}>Result:</h1>
                    <p>Hello, John Doe</p>
                </div>
            </div>
        );
    }
}

export default CodeExample;
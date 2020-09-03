import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class About extends React.Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        // Getting input data from readme on github.
        axios.get('https://raw.githubusercontent.com/Doxify/ai-ghostwriter/master/README.md')
            .then((result) => {
                if(result && result.data) {
                    this.setState({ input: result.data });
                } else {

                }
            })
    }

    render() {
        return ( 
            <div className="mt-5 mb-5">
                <div className="container">
                    <p className="float-right mb-5">
                        <span>The about page is a direct copy of the README.md from the project on </span>
                         <a href="https://github.com/doxify/ai-ghostwriter">Github</a>.
                    </p>
                    <ReactMarkdown source={this.state.input} />
                </div>
            </div>
        )
    }
}

export default About;
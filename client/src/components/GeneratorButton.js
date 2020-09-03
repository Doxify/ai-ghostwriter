import React from 'react';
import qs from 'querystring';
import './components.scss';

import { Redirect } from 'react-router-dom';

import Reader from './reader/Reader';
import axios from 'axios';

class GeneratorButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: '',
            loading: false,
            data: {
                generated: false,
                id: null,
                result: null,
                created: null
            },
            error: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let url = `http://localhost:5000/generate`;
        let body = { keywords: this.state.keywords };
        const config = {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    

        axios.post(url, qs.stringify(body), config)
            .then((result) => {
                if(result && result.data) {
                    this.setState({ data: {
                        id: result.data.id,
                        result: result.data.result,
                        generated: true
                    }});
                    // TODO:
                    // 1. Save generation id to local storage so you can view your past generations?
                    // 2. Save the input with the generation output (API idea)
                    // 3. Redirect to the expanded view page.
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    render() {
        // Redirect on generation.
        if(this.state.data.generated) {
            return (
                <Redirect to={{
                    pathname: `/reader/${this.state.data.id}`,
                    state: this.state.data
                }} />
                // <Reader id={this.state.data.id} output={this.state.data.result} />
            )
        }

        // Else render button.
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    {/* Three word input */}
                    <input
                        id="generator-input"
                        type="text" 
                        className="form-control"
                        name="keywords"
                        value={this.state.keywords}
                        onChange={this.handleChange}
                        placeholder="Enter three words..."
                        aria-label="Text input with segmented dropdown button"
                    />
                    <button type="submit" className="btn btn-primary">Generate</button>
                    
                    {/* Selecting language */}
                    {/* <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" dropdown-toggle="dropdown">
                        <li><span className="dropdown-item">English</span></li>
                        <li><span className="dropdown-item">Spanish</span></li>
                        <li><span className="dropdown-item">Romanian</span></li>
                        <li><span className="dropdown-item">Russian</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item">Java Byte Code</span></li>
                    </ul> */}
                </div>
            </form>
        )
    }
}

export default GeneratorButton;
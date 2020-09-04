import React from 'react';
import qs from 'querystring';
import './components.scss';

import { Redirect } from 'react-router-dom';

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
                result: null
            },
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ loading: true });
        event.preventDefault();
        
        let url = `${process.env.REACT_APP_API_URL}/generate`;
        let body = { keywords: this.state.keywords };
        const config = {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    
        axios.post(url, qs.stringify(body), config)
            .then((result) => {
                if(result && result.data) {
                    if(result.data.status === 'OK') {
                        this.setState({ 
                            data: {
                                id: result.data.id,
                                result: result.data.result,
                                generated: true
                            }
                        });
                    } else {
                        this.setState({ error: result.data.message});
                        setTimeout(() => {
                            this.setState({ error: null });
                        }, 3500);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setState({ loading: false });
            })
    }
    
    render() {
        if(this.state.data.generated) {
            // Redirect on generation.
            return (
                <Redirect to={`/reader?id=${this.state.data.id}`}/>
            )
        } else if(this.state.error) {
            // Render the error message
            return (
                <div className="alert alert-danger" role="alert">
                    {this.state.error}
                </div>
            )
        } else {
            // Else render button normally.
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mt-2 mb-2">
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
                        <button type="submit" className="btn btn-primary" disabled={this.state.loading}>Generate</button>
                        
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
}

export default GeneratorButton;
import React from 'react';
import './components.scss';

import axios from 'axios';

class GeneratorButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            type: '',
            loading: false,
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
        const form = {
            input: this.state.input
        };

        // axios.post(`${process.env.REACT_APP_API_URL}/generate`, form)
        //     .then((result) => {
        //         if(result) {
        //             // TODO: Successfully generated
        //             // 1. Save generation id to local storage so you can view your past generations?
        //             // 2. Save the input with the generation output (API idea)
        //             // 3. Redirect to the expanded view page.
        //         }
        //     })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    {/* Three word input */}
                    <input
                        id="generator-input"
                        type="text" 
                        className="form-control"
                        name="input"
                        value={this.state.input}
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
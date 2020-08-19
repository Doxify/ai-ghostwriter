import React from 'react';
import './components.scss';

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
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // Make the API call here and redirect on generation
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
                    <button type="button" className="btn btn-primary">Generate</button>
                    
                    {/* Selecting language */}
                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><span className="dropdown-item">English</span></li>
                        <li><span className="dropdown-item">Spanish</span></li>
                        <li><span className="dropdown-item">Romanian</span></li>
                        <li><span className="dropdown-item">Russian</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item">Java Byte Code</span></li>
                    </ul>
                </div>
            </form>
        )
    }
}

export default GeneratorButton;
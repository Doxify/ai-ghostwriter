import React from 'react';
import GeneratorButton from '../GeneratorButton';
import axios from 'axios';

class Reader extends React.Component {
    constructor() {
        super();

        this.state = {
            id: null,
            result: '',
            created: null
        }


    }

    getData() {
        axios.get('http://localhost:5000/')
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(this.props.location.state);
        }
    }

    render() {
        return ( 
            <div className="mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col float-left">
                            <h2 className="display-4">{this.state.id}</h2>
                        </div>
                        <div className="col float-right">
                            <GeneratorButton />
                        </div>
                    </div>
                    <div className="row">
                        <p className="">{this.state.result}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reader;
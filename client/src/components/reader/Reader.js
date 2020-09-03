import React from 'react';
import GeneratorButton from '../GeneratorButton';
import axios from 'axios';

class Reader extends React.Component {
    constructor() {
        super();

        this.state = {
            id: null,
            result: '',
            keywords: [],
            created: null,
            loading: true
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        // Verify that id is in url
        let url = new URL(window.location.href);
        if(url.searchParams.get('id')) {
            // Getting data
            this.getData(url.searchParams.get('id'));
        } else {
            // REDIRECT?
        }
    }

    getData(id) {
        this.setState({ loading: true });
        axios.get(`http://localhost:5000/getData?id=${id}`)
            .then((result) => {
                if(result && result.data) {
                    let data = result.data;
                    this.setState({
                        id: data._id["$oid"],
                        result: data.output,
                        keywords: data.keywords,
                        created: data.created,
                        loading: false
                    });
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
        return ( 
            <div className="mt-5 mb-5">
                <div className="container text-center" hidden={!this.state.loading}>
                    <p className="text-muted">Loading data from database...</p>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className="container" hidden={this.state.loading}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 float-left">
                            <h2 className="display-6">
                                { this.state.keywords.map((kw) => <span>{kw} </span> )}    
                            </h2>
                            <span className="text-muted">Id: {this.state.id}</span>
                        </div>
                        <div className="col-sm-12 col-md-6 float-right">
                            <span className="text-muted">Generate another masterpiece!</span>
                            <GeneratorButton />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card mt-3 shadow">
                                <div className="card-body p-5">
                                    { this.state.result }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reader;
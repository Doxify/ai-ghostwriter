import React from 'react';
import GeneratorButton from '../GeneratorButton';
import Thumbnail from '../generator/Thumbnail';
import '../components.scss';


class HeroGenerator extends React.Component {
    render() {
        return (
            <div className="generator-container container-fluid mt-5 mb-5 shadow">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {/* Generator Input */}
                        <div className="col-sm-12 text-center p-5">
                            <h4 className="title text-primary">Use the AI Ghostwriter</h4>
                            <p className="text-muted">Enter three words to get the AI Ghostwriter started on your masterpiece.</p>
                            <div className="generator-card mx-auto">
                                <div className="card-body">
                                    <GeneratorButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center m-2">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                            <Thumbnail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroGenerator;
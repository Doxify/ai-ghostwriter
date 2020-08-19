import React from 'react';
import Logo from '../../images/logo.svg';

class Hero extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <div className="col-sm-4 text-right">
                        <div className="">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                    {/* Hero Text */}
                    <div className="col-sm-8 text-left">
                        <div className="display-5 p-3 mt-5">
                            <p className="hero-text"><strong className="text-primary">AI Ghostwriter</strong> uses RNN to generate text. It currently supports English, Spanish, Romanian, and Russian as well as Java byte code.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
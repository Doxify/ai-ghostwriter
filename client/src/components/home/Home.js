import React from 'react';
import Hero from './Hero';
import HeroGenerator from './HeroGenerator';
import './home.scss';

class Home extends React.Component {
    render() {
        return ( 
            <div className="mt-5 mb-5">
                <Hero />
                <HeroGenerator />
            </div>
        )
    }
}

export default Home;
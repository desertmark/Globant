import './Home.css';
import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import Slider from '../../components/slider/Slider.jsx';
import {SLIDES_URL} from './constants';
import FlightFinder from '../../components/flight-finder/FlightFinder.jsx';

class Home extends Component{
    render(){
        return (
            <div className="home">
                <div className="home-slider">
                    <Slider url={SLIDES_URL} interval={3000}/>
                </div>
                <div className="flight-finder-wrapper">
                    <FlightFinder />
                </div>

            </div>
        );
    }
}
export default connect()(Home);
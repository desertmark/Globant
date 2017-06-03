import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import Slider from '../../components/slider/Slider.jsx';
import {SLIDES_URL} from './constants';


class Home extends Component{
    render(){
        return (
            <div>
                <Slider url={SLIDES_URL}/>
                hello {this.props.name}
            </div>
        );
    }
}
export default connect()(Home);
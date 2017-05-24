import React,{Component} from 'react';
import './Slider.css';
class Slider extends Component{
    render(){
        return <div className = "slider">
                    <img src={this.props.images[0].image} alt={this.props.images[0].alt}/>
               </div>
    }
}
export default Slider;
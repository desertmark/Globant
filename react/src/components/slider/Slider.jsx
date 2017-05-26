import React,{Component} from 'react';
import {connect} from 'react-redux'
import {next,prev} from './actions';
import {bindActionCreators} from 'redux';
import './Slider.css';
class Slider extends Component{
    componentDidMount(){
        document.querySelector('#prev').addEventListener('click',()=>{
            this.props.prev();
        });

        document.querySelector('#next').addEventListener('click',()=>{
            this.props.next(this.props.activeImage, this.props.images);

        });
    }
    render(){
        return <div className = "slider">
                    <button id="prev" type="button"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
                    <img src={this.props.activeImage.image} alt={this.props.activeImage.alt}/>
                    <button id="next" type="button"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
               </div>
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.slideShow.images,
        activeImage: state.Slider.activeImage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            next,
            prev
        }, dispatch);
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);
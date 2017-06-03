import React,{Component} from 'react';
import {connect} from 'react-redux'
import {next,prev,init,fetchSlideShow} from './actions';
import {bindActionCreators} from 'redux';
import './Slider.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Slider extends Component{
    constructor(){
        super();
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);   
    }
    componentWillMount(){
        this.props.fetchSlideShow(this.props.url);
    }
    componentDidMount(){
        
    }    
    prev(){
        this.props.prev();
    }
    next(){
        this.props.next(this.props.activeImage, this.props.images);
    }
    render(){
        return <div className = "slider">

                    <ReactCSSTransitionGroup 
                        transitionName="fade" 
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}                         
                        >
                        <img key={this.props.activeImage.image} src={this.props.activeImage.image} alt={this.props.activeImage.alt}/>
                    </ReactCSSTransitionGroup>                    
                
                    <button id="prev" onClick={this.prev} type="button"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
                    <button id="next" onClick={this.next} type="button"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>

               </div>
    }
}

const mapStateToProps = (state) => {
    return {
        activeImage: state.Slider.activeImage,
        images: state.SliderApi.images,
        isFetchingSlides: state.slideShow.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            next,
            prev,
            init,
            fetchSlideShow
        }, dispatch);
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);
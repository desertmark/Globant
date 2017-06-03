import React,{Component} from 'react';
import {connect,} from 'react-redux'
import {play,pause,next,prev,init,fetchSlideShow} from './actions';
import {bindActionCreators} from 'redux';
import './Slider.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Slider extends Component{
    constructor(){
        super();
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);    
    }
    componentWillMount(){
        this.props.fetchSlideShow(this.props.url);  
    }
    componentDidMount(){
        this.play();
    }   
    prev(){
        this.props.prev(this.props.activeImage, this.props.images); 
    }
    next(){
        this.props.next(this.props.activeImage, this.props.images);        
    }
    play(){
        if(this.props.isPaused){

            //this.props.next(this.props.activeImage, this.props.images); 
            let playId = setInterval(()=>{
                this.next(); 
            },this.props.interval);
            this.props.play(playId);
        } 
    }
    pause(){
        if(this.props.isPlaying){
            clearInterval(this.props.playIntervalId);
            this.props.pause();
        }

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
                    
                    <button className = "sliderControl" id="prev" onClick={this.prev} type="button"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
                    <button className = "sliderControl" id="next" onClick={this.next} type="button"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
                    <button className = "sliderControl" id="play" onClick={this.play} type="button"><span className="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                    <button className = "sliderControl" id="pause" onClick={this.pause} type="button"><span className="glyphicon glyphicon-pause" aria-hidden="true"></span></button>
               </div>
    }
}

const mapStateToProps = (state) => {
    return {
        activeImage:      state.Slider.activeImage,
        isPlaying:        state.Slider.isPlaying,
        isPaused:         state.Slider.isPaused,
        playIntervalId:   state.Slider.playIntervalId,
        images:           state.SliderApi.images,        
        isFetchingSlides: state.SliderApi.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            play,
            pause,
            next,
            prev,
            init,
            fetchSlideShow
        }, dispatch);
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);
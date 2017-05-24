import React, {Component} from 'react';
import './Card.css';
class Card extends Component{
    render(){
        return (
            <div className="card">
                <img src ={this.props.image} alt={this.props.alt}/>
                <div className = "card-description ">
                    <h4 className = "">{this.props.title}</h4>
                    <p className="text-muted">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Card;
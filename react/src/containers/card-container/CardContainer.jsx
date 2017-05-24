import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import Card from '../../components/card/Card.jsx';
import './CardContainer.css';
class CardContainer extends Component{    
    render(){
        return (
            <div className="card-container">
                <div className="row">
                    {this.props.cards.map((card,index)=>{
                        return  <div className="col-sm-4" key = {index}>
                                    <Card {...card}/> 
                                </div>//Los tres puntos significa: Creá un objeto nuevo y extendé sus propiedades con lo que sigue, en este caso card. Ademas en este caso mapea los atributos de card con los del Componente Card, y me evito pasar los atributos 1 por 1 (image="card.image", etc.)
                    })}
                </div>
                
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cards: state.cards.cards,
//     }
// }

export default CardContainer
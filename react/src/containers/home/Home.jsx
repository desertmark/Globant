import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor


class Home extends Component{
    render(){
        return (
            <div>
                Home Page.
                hello {this.props.name}
            </div>
        );
    }
}

export default connect()(Home);
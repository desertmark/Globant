import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor


class ClientServices extends Component{
    render(){
        return (
            <div>
                Client Services  Page.
            </div>
        );
    }
}

export default connect()(ClientServices);
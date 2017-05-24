import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor


class FFP extends Component{
    render(){
        return (
            <div>
                FFP Page.
            </div>
        );
    }
}
export default connect()(FFP);
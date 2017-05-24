import React from 'react';
import ReactDOM from 'react-dom';
import {navConfig} from './nav.config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Nav extends React.Component{
    createOptions(){
        return navConfig.map((option, index)=>{
                    return  <li key={index}>
                                <Link to={option.Path}>{option.navOption}</Link>
                            </li>
               });
    }
    render() {

        return (
            <ul>
               {this.createOptions()}
            </ul>                       
            );
    }
}

export default connect()(Nav);
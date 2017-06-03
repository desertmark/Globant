import React from 'react';
import ReactDOM from 'react-dom';
import {navConfig} from './nav.config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css';
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
            <ul className="menu menu-horizontal">
               {this.createOptions()}
            </ul>                       
            );
    }
}

export default Nav;
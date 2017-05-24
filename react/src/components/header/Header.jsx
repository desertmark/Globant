import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/Nav.jsx';
class Header extends React.Component{
    
    render() {
        return (
            <header>
                Header
                {/*<div>
                    <img src="{this.props.logoSrc}" alt="{this.props.logoAlt}"/>
                    <div class ="{this.class}">
                        <p>
                            {this.props.telefono}
                        </p>
                        <select>
                                
                        </select>
                        <a href="{this.props.contactHref}">{this.props.contactText}</a>
                    </div>
                </div>*/}
                <Nav />
            </header>                        
            );
    }
}

export default Header;
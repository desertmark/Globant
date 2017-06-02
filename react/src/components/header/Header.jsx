import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/Nav.jsx';
import './Header.css';
class Header extends React.Component{
    constructor(){
        super();
        this.renderIdiomas = this.renderIdiomas.bind(this);
    }
    renderIdiomas(){

        var options = this.props.idiomas.map((idioma,ix)=>{            
            return <option key={ix} value={idioma.value}>{idioma.text}</option>
        });
        return options;
    }
    render() {
        return (
            <header>
                <div className="row">
                    <div className ="col-sm-12">
                        <div className = "col-sm-4">
                            <img src={this.props.logoSrc} alt={this.props.logoAlt}/>
                        </div>
                        <div className = "col-sm-offset-4 col-sm-4">
                            {/*<p className="col-sm-2">Telefono: {this.props.telefono}</p>*/}
                            <div className="row col-sm-offset-3">
                                <select>                        
                                    {this.renderIdiomas()}
                                </select>
                            </div>
                            <div className="row col-sm-offset-3">
                                <a href={this.props.contactHref}>{this.props.contactText}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Nav/>
                </div>
            </header>                        
            );
    }
}

export default Header;
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {connect} from 'react-redux';
import {appGetBusy, appGetReady} from './app-actions';
import {bindActionCreators} from 'redux';
import  {Route, IndexRoute} from 'react-router';
//Containers
import Home from './containers/home/Home.jsx';
import ClientServices from './containers/client-services/ClientServices.jsx';
import OptionalProducts from './containers/optional-products/OptionalProducts.jsx';
import FFP from './containers/ffp/FFP.jsx';

import Promo from './components/promo/promo.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';


class App extends React.Component {
    componentWillMount(){
        this.props.appGetBusy();
    }
    componentDidMount(){
        this.props.appGetReady();
    }    
    render() {
        return (            
            <div>
                <Header logoSrc = "http://d1jp0w2s0ejaji.cloudfront.net/Content/themes/V3/img/common/logo_Aerolineas.gif"
                        logoAlt = "Logo de aerolineas"
                        telefono = "+5944433011"
                        contactHref="/contact"
                        contactText ="Comuniquese con nosotros"
                        idiomas={[{"text":"Español (Argentina)", "value":1},{"text":"Inglés", "value":2},{"text":"Portugues", "value":3}]}
                        />
                <Route exact path ="/" component={Home}/>
                <Route path="/ffp" component={FFP}/>
                <Route path="/client-services" component={ClientServices}/>
                <Route path="/optional-products" component={OptionalProducts}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ready: state.app.ready
    }
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({appGetBusy, appGetReady}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProp)(App);
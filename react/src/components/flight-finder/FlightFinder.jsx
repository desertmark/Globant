import React from 'react';
import './FlightFinder.css';
class FlightFinder extends React.Component{
    render(){
        return (
            <div className="flight-finder">
                <header className="col-sm-12">
                    <div>
                        <img src="http://d1jp0w2s0ejaji.cloudfront.net/Content/themes/V3/img/common/ico_plane.png" alt="Vuelos"/>
                        Vuelos
                    </div>                    
                </header>
                <form formMethod="POST" formAction="#" className="form">
                    {/*RADIOS*/}
                    <div className="form-group radios">
                        <label class="radio-inline">
                            <input type="radio" name="tipoVuelo" id="idaVuelta" value="1" defaultChecked/> Ida y vuelta
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="tipoVuelo" id="ida" value="2"/> Ida
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="tipoVuelo" id="multiplesDestinos" value="3"/> Múltiples destínos
                        </label> 
                    </div>
                    {/*ORIGEN*/}
                    <div className="form-group">
                        <input className="form-control" type="text" name="origen" placeholder="Orígen"/>
                    </div>
                    {/*DESTINO*/}
                    <div className="form-group">
                        <input className="form-control" type="text" name="destino" placeholder="Destíno"/>
                    </div>

                    <div className="row">
                        fechas
                    </div>
                    <div className="row">
                        clase y personas
                    </div>
                    <div className="row">
                        buscar
                    </div>
                </form>
            </div>
        );
    }
}

export default FlightFinder;
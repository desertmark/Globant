import axios from 'axios';
import mockStore from 'redux-mock-store';
import {fetchClientServices} from './actions';
import {FETCH_CLIENT_SERVICES, ERROR_IN_FETCH_CLIENT_SERVICES, RECEIVE_CLIENT_SERVICES, CLIENT_SERVICES_API} from './constants';
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockedStore = mockStore(middleware);
const axiosMock = new MockAdapter(axios);

describe('Client services actions',()=>{
    it('Client services should be SUCCESS',()=>{
        axiosMock.onGet('/api/client-services')
        .reply(200, {
            "services":[{
                "image": "http://d1jp0w2s0ejaji.cloudfront.net/Images/BannersRelacionados/Estadodevuelo_20161227030540.jpg",
                "alt": "alternative text to image",
                "text": "Antes de iniciar tu viaje regional o internacional",
                "title": "Relajate y disfruta tu espera en ezeiza",
                "link":"http://aerolineas.com.ar"
            },{
                "image": "http://d1jp0w2s0ejaji.cloudfront.net/Images/BannersRelacionados/Estadodevuelo_20161227030540.jpg",
                "alt": "alternative text to image",
                "text": "Antes de iniciar tu viaje regional o internacional",
                "title": "Relajate y disfruta tu espera en ezeiza",
                "link":"http://aerolineas.com.ar"
            }]
        });

        const expectedActions = [
                {type:FETCH_CLIENT_SERVICES},
                {type:RECEIVE_CLIENT_SERVICES}
            ];
        const store = mockedStore({
            clientServices:{isFetching: false, services:[], error: null}
        });
        console.log(store);
        return store.dispatch(fetchClientServices()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    // it('Client services should be FAILURE',()=>{
    //     nock('http://localhost:8882/')
    //     .get('/api/client-services')
    //     .reply(500);

    //     const expectedActions = [
    //             {type:FETCH_CLIENT_SERVICES},
    //             {type:ERROR_IN_FETCH_CLIENT_SERVICES}
    //         ];
    //     const store = mockedStore({
    //         clientServices:{isFetching: false, services:[], error: null}
    //     });


    //     return store.dispatch(fetchClientServices()).then(()=>{
    //         expect(store.getActions()).toEqual(expectedActions);
    //     });
    // });
});

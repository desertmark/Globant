import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ClientServices from './ClientServices.jsx';
const middleware = [thunk];
const mockedStore = mockStore(middleware);

//Conditions son los TestCases, osea, los distintos valores con cual correr los tests.
const setup = (conditions)=>{
    const store = mockedStore(conditions);
    const enzymeWrapper = mount(
        <Provider store={store}>
            <ClientServices />            
        </Provider>
    );
    return {
        enzymeWrapper
    }
}

describe('Test <ClientServices/>', () => {
    it('Loading component should appear when is fetching', () => {
        let conditions = {
            clientServices:{
                isFetching: true,
                services: [],
            },
            fetchClientServices: () => true,
        }
        const { enzymeWrapper } = setup(conditions);
        const clientServices = enzymeWrapper.find(ClientServices);
        expect(clientServices.find('#loading')).not.toBeNull();
    });
});

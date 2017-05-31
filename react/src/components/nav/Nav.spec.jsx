import React from 'react';
import {shallow} from 'enzyme';
import Nav from './Nav.jsx';
import {navConfig} from './nav.config.js';

function setup(){
    const enzymeWrapper = shallow(<Nav/>)
    return {
        navConfig,
        enzymeWrapper
    }
}

describe('Nav component', ()=>{
    it('Nav component should have several links', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find('Link').length).toBeGreaterThan(1);
    });
});

describe('Nav component', ()=>{
    it('Nav component should have several Links with "To" attribute', () => {
        const {enzymeWrapper, navConfig} = setup();
        enzymeWrapper.find('Link').forEach(Link => expect(Link.prop('To')).not.toBeNull());
    });
});
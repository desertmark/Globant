import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card.jsx';

function setup() {
    const props = {
        image: "image.jpg",
        alt: "ALT",
        title: "TITLE",
        text: "Lorem Ipsum dolor sit amet"
    }
    const enzymeWrapper = shallow(<Card {...props}/>);

    return {
        props,
        enzymeWrapper
    }
}

describe('Card component',() => {
    it('Card component should have an image',()=>{
        const {enzymeWrapper, props} = setup();
        expect(enzymeWrapper.find('img').length).toBe(1);
        expect(enzymeWrapper.find('img').prop('src')).toBe(props.image);
        expect(enzymeWrapper.find('img').prop('alt')).toBe(props.alt);
    });
});
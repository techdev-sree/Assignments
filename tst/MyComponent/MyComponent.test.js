import React from 'react';
import { MyComponent } from '../../src/MyComponent/MyComponent';
import { shallow } from 'enzyme';

describe('MyComponent Test', () => {
    it('render correctly text component', () => {
        const myComponent = shallow(<MyComponent/>);
        expect(myComponent).toMatchSnapshot();
        expect(myComponent.state()).toEqual({ name: 'SFO', rendered: true });
        expect(myComponent.state('rendered')).toBeTruthy();
    });
});

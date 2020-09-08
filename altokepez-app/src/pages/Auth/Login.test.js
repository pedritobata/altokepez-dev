import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import {TestLogin} from './Login';
import Backdrop from '../../components/Backdrop/Backdrop';


configure({adapter: new Adapter()});

describe('Login Component', () => {
    it("Should have a Backdrop child component", () => {
        const wrapper = shallow(<TestLogin />);
        expect(wrapper.contains(<Backdrop />));
    });
});
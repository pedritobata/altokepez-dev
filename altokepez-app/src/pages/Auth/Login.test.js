import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'; 
import {TestLogin} from './Login';
import Backdrop from '../../components/Backdrop/Backdrop';


// configure({adapter: new Adapter()});

describe('Login Component', () => {
    it("Should have a Backdrop child component", () => {
        const wrapper = shallow(<TestLogin />);
        expect(wrapper.contains(<Backdrop />));
    });

    it("Should render empty input box", () => {
        const wrapper = shallow(<TestLogin />);
        expect(wrapper.find('input[type="text"]').textContent).toBe(undefined);
    });
});


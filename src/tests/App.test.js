import React from 'react';
// import { render } from 'react-testing-library';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import ShallowRenderer from 'react-test-renderer/shallow';

import App from "../App";
import store from '../store';
import { Provider } from 'react-redux';
import { Title, PriceTag, Actions, Button } from "../ui";

configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();
describe('<App />',()=>{
    it('should render and match the snapshot',()=>{
        renderer.render(<Provider store={store}><App /></Provider>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    })
    it('should have a Title Component',()=>{
        const wrapped  = shallow(<Provider store={store}><App /></Provider>);
        expect(wrapped.find(Title).length.toEqual(1))
        
    })
})
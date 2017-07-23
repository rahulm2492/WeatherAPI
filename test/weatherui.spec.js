require('whatwg-fetch');
import React from 'react';
import WeatherUI from '../client/components/WeatherUI';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import {Provider} from 'react-redux';
var fetchMock = require('fetch-mock');

const mockStore = configureMockStore([thunk]);
describe('Weather UI', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
    fetchMock.get('*', {hello: 'world'});
    
  });
 

  it('render connected component', () => {
     const wrapper = mount(<WeatherUI store={store}/>);
     expect(wrapper.find(WeatherUI).length).to.equal(1);
  });

   it('render detail cards', () => {
    const func1 = stub().returns(50);
    const wrapper = mount(<WeatherUI store={store} onName={func1} />);
    wrapper.setState({ cityName: 'gurgaon' });
    expect(func1.calledOnce).to.equal(false);
    
  });
  it('render detail cards', () => {
    const func1 = spy();
    const wrapper = mount(<WeatherUI store={store} onName={func1} />);
    wrapper.setState({ cityName: 'gurgaon' });
      expect(func1.calledOnce).to.equal(false);
    wrapper.find('button').simulate('click');
  });

 
});
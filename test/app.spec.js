import React from 'react';
import App from '../client/components/App';

describe('App', () => {
  const wrapper = shallow(<App/>);
  it('should be a div dom node', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should be a class attached', () => {
     expect(wrapper.find('.weatherUI')).to.have.length(1);
  });

  it('should render two children as actual', () => {
     expect(wrapper.children()).to.have.length(2);
  });

 
});
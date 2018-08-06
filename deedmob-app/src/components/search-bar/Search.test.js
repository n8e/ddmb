import React from 'react';
import Search from './Search';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Search', () => {

  it('should render successfully', () => {
    const component = shallow(<Search handleChange={() => { }} param="bruce" />);

    expect(component.length).toEqual(1);
    expect(component.find('input').length).toEqual(1);
    expect(component.find('input').parent().is('div')).toEqual(true);
    expect(component.find('input').text()).toEqual('');
    expect(component.find('input').props().value).toEqual('bruce');
    expect(typeof component.find('input').props().onChange).toBe('function');
  });
});

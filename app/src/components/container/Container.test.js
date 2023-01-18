import React from 'react';
import Container from './Container';
import Search from '../search-bar/Search';
import FriendsList from '../friends/FriendsList';
import Enzyme, { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

let shallowWithStore;

describe('Container', () => {
  beforeAll(() => {
    shallowWithStore = (component, store) => {
      const context = {
        store,
      };
      return shallow(component, { context });
    };
  });

  it('should render successfully without friends list JSON props', () => {
    const testState = {
      friends: []
    };

    const store = createMockStore(testState);
    const component = shallowWithStore(<Container />, store);
    expect(typeof component).toEqual('object');
    expect(component.length).toEqual(1);
  });

  it('should contain Search and FriendList components when props are provided', () => {
    const testState = {
      friends: [{
        id: 1,
        name: "Bruce Wayne",
        handle: "@Batman"
      }, {
        id: 2,
        name: "Clark Kent",
        handle: "@Superman"
      }]
    }

    const store = createMockStore(testState);
    const component = shallowWithStore(<Container location={{ search: '?q=bruce' }} />, store);

    expect(component.dive().find(Search).length).toEqual(1);
    expect(component.dive().find(FriendsList).length).toEqual(1);
  });
});

import React from 'react';
import FriendsList from './FriendsList';
import FriendCard from './FriendCard';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const friends = [{
  id: 1,
  name: "Bruce Wayne",
  handle: "@Batman"
}, {
    id: 2,
    name: "Clark Kent",
    handle: "@Superman"
  }];

describe('FriendsList', () => {

  it('should render successfully', () => {
    const component = shallow(<FriendsList friends={friends} />);

    expect(component.length).toEqual(1);
    expect(component.find('.friends-container').length).toEqual(1);
    expect(component.find(FriendCard).length).toEqual(2);
  });
});

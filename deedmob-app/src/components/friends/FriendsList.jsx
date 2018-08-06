import React from 'react';

import './FriendsList.css';

import FriendCard from './FriendCard';
import NoFriendsCard from './NoFriendsCard';

const FriendsList = (props) => {
  const renderFriendCards = (friends) => {
    return friends.map(friend => {
      return (
        <FriendCard key={friend.id} name={friend.name} handle={friend.handle} />
      )
    });
  }

  return (
    <div className="friends-container">
      {props.friends && props.friends.length ? renderFriendCards(props.friends) : <NoFriendsCard />}
    </div>
  );
};

export default FriendsList;
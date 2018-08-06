import React from 'react';

const FriendCard = (props) => {
  return (
    <div className="friend-card">
      <div className="friend-name">{`${props.name}`}</div>
      <div className="friend-handle">{`${props.handle}`}</div>
    </div>
  )
};

export default FriendCard;
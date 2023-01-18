import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Container.css';
import Search from '../search-bar/Search';
import FriendsList from '../friends/FriendsList';
import { searchFriend } from '../../actions';

class Container extends Component {
  static propTypes = {
    friends: PropTypes.array
  }

  componentDidMount() {
    if (this.props.location.search && this.props.location.search !== '?q=') {
      this.props.dispatch(searchFriend(this.props.location.search.replace('?q=', '')));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.dispatch(searchFriend(nextProps.location.search.replace('?q=', '')));
    }
  }

  handleSearchInputChange = (e) => {
    this.props.history.push('?q=' + e.target.value);
    this.props.dispatch(searchFriend(e.target.value));
  }

  render() {
    return (
      <div className="container">
        <Search
          param={this.props.location.search.replace('?q=', '')}
          handleChange={this.handleSearchInputChange}
        />
        <FriendsList
          friends={this.props.friends}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { dispatch } = state;
  const friends = state.friends;
  return {
    dispatch,
    friends,
  };
};

export default connect(mapStateToProps)(Container)

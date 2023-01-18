import axios from 'axios';

export const getUpdatedFriendsList = payload => ({
  type: 'GET_UPDATED_FRIENDS_LIST',
  payload,
});

export const getUpdatedFriendsListError = payload => ({
  type: 'GET_UPDATED_FRIENDS_LIST_ERROR',
  payload,
});

export const searchFriend = queryParam => (dispatch) => {
  return axios.get(`//localhost:3001/api/friends?q=${queryParam}`)
    .then(response => {
      dispatch(getUpdatedFriendsList(response.data));
    })
    .catch((error) => {
      dispatch(getUpdatedFriendsListError(error));
    });
};
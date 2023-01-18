export const INITIAL_STATE = {
  friends: [],
  error: ''
};

const friendsData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_UPDATED_FRIENDS_LIST':
      return { friends: action.payload.slice(0) };
    case 'GET_UPDATED_FRIENDS_LIST_ERROR':
      return { error: action.payload };
    default:
      return state;
  }
};

export default friendsData;
const initialState = [];

export default (state = initialState, action) => {
  if (action.type === 'CAR_SELECTED') {
    return action.payload
  }
  return state;
}

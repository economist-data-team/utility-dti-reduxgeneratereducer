/**
 * a utility function for creating generic reducers
 *
 * @param {*} defaultState - the initial state of the property; this
 *                           will generally be a reference to
 *                           `initialState.foo`
 * @param {String} actionName - the name of the action associated with
 *                              this reducer
 *
 * @return {*} - the new value of the action (pulled from the action's
 *               data attribute)
 */
export default function generateReducer(defaultState, actionName) {
  return function reducer(state = defaultState, action) {
    return action.type === actionName ? action.data : state;
  };
}

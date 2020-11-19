const isActionType = (action, suffix) => {
  return action !== undefined && action.type.endsWith(suffix);
};

export const logger = (state, action) => {
  if (process.env.NODE_ENV !== 'test' && !process.env.REACT_APP_IS_PRODUCTION) {
    console.info({ key: 'dispatching', value: action.payload }, action.type);
  }
  return state;
};

export const startedReducer = (state, action) => {
  if (isActionType(action, '_STARTED')) {
    return {
      ...state,
      isLoading: true,
      errorsByAction: null
    };
  }
  return state;
};

export const doneReducer = (state, action) => {
  if (isActionType(action, '_DONE')) {
    return {
      ...state,
      isLoading: false
    };
  }
  return state;
};

export const failedReducer = (state, action) => {
  if (isActionType(action, '_FAILED')) {
    return {
      ...state,
      isLoading: false,
      errorsByAction: {
        ...state.errorsByAction,
        [action.type]: action.payload.response
          ? action.payload.response.data.message
          : action.payload.message
      }
    };
  }
  return state;
};

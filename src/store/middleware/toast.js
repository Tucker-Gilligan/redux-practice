const toast = store => next => action => {
  if (action.type === 'error') console.log('Toastify', action.payload.message);
  else next(action);
};

// Currying
// N => 1
export default toast;

const logger = param => store => next => action => {
  console.log('LOGGING', param);

  next(action);
};

// Currying
// N => 1
export default logger;

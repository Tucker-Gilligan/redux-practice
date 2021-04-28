import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

// UI Layer - don't want to know what endpoint
// or action to call on success - too much detail for UI level

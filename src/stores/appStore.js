import appReducer from '../reducers/appReducer';
import { createStore, applyMiddleware, combineReducers } from"redux";
import thunk from 'redux-thunk';

const staticReducers = {
	app: appReducer
}

// Configure the store
function configureAppStore() {
  const appStore = createStore(createReducer(), applyMiddleware(thunk))

  // Add a dictionary to keep track of the registered async reducers
  appStore.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  appStore.injectReducer = (key, asyncReducer) => {
    appStore.asyncReducers[key] = asyncReducer
    appStore.replaceReducer(createReducer(appStore.asyncReducers))
  }

  appStore.ejectReducer = (key) => {
    delete appStore.asyncReducers[key]
    appStore.replaceReducer(createReducer(appStore.asyncReducers))
  }

  // Return the modified store
  return appStore
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

export default configureAppStore();

import { compose, legacy_createStore as createStore, combineReducers, Middleware } from "redux";

const action = { type: "example" };
const anyAction = { type: "example", data: "123" };

const init = {
  user: {
    isLoggIn: false,
    data: null,
  },
  post: [],
};

const reducer = combineReducers({
  user: (state, action) => state,
  posts: (state, action) => state,
});
const store = createStore(reducer, init);

const thunkMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

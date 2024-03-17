import { createStore, Store, Reducer } from 'redux';

// Define your initial state interface
export interface AppState {
  userPosts: any[]; // Replace `any[]` with the appropriate type for user posts
  // Add other initial state properties here if needed
}

// Define your action types
enum ActionType {
  SET_USER_POSTS = 'SET_USER_POSTS',
  // Add other action types here if needed
}

// Define your action interfaces
interface SetUserPostsAction {
  type: ActionType.SET_USER_POSTS;
  payload: any[]; // Replace `any[]` with the appropriate type for user posts
}

// Define your actions
type AppAction = SetUserPostsAction;

// Define your action creators
export const setUserPosts = (posts: any[]): SetUserPostsAction => ({
  type: ActionType.SET_USER_POSTS,
  payload: posts,
});

// Define your reducer function
const reducer: Reducer<AppState, AppAction> = (
  state: AppState = { userPosts: [] },
  action: AppAction
): AppState => {
  switch (action.type) {
    case ActionType.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    // Add other cases for different action types if needed
    default:
      return state;
  }
};

// Create the Redux store
const store: Store<AppState, AppAction> = createStore(reducer);

export default store;

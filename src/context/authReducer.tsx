export type InitialState = {
  user: { email: string; password: string } | null;
  users: any;
  userDetails: any;
  isFetching: boolean;
  isError: boolean | string;
};
type action = {
  type: string;
  payload: any;
};
export const authReducer = (state: InitialState, action: action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isFetching: true, isError: false };
    case "LOGIN_SUCCESS":
      return { user: action.payload, isFetching: false, isError: false };
    case "LOGIN_ERROR":
      return { user: null, isFetching: true, isError: action.payload };
    default:
      return state;
  }
};

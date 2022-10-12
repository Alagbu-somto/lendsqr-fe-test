import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
// import { login } from "./authAction";
export type InitialState = {
  user: { email: string; password: string } | null;
  users: any;
  userDetails: any;
  isFetching: boolean;
  isError: boolean | string;
};
const User: any = localStorage.getItem("user");
const currentUser: any = JSON.parse(User);
// localStorage.removeItem("user");
const initialState: InitialState = {
  user: currentUser ? currentUser : null,
  users: [],
  userDetails: {},
  isFetching: false,
  isError: false,
};

export const AuthContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
export const AuthContextProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const values = {
    user: state.user,
    users: state.users,
    userDetails: state.userDetails,
    isFetching: state.isFetching,
    isError: state.isError,
  };
  return (
    <AuthContext.Provider
      value={{
        state: values,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

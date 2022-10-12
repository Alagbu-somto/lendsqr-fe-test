export interface login {
  email: string;
  password: string;
}
export const LoginStart = () => ({ type: "LOGIN_START" });
export const LoginSuccess = (payload: login) => ({
  type: "LOGIN_SUCCESS",
  payload,
});
export const LoginError = (payload: any) => ({ type: "LOGIN_ERROR", payload });

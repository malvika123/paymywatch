export const LOGIN = "login";
export const LoginDetailsUpdate = (params, dispatch) => {
  console.log("params", params);
  // dispatch(() => ToMyprofile());
  return {
    type: "LOGIN",
  };
};

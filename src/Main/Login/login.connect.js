import { connect } from "react-redux";
import Login from "./login";
import { LoginDetailsUpdate } from "./Login.action";
const mapDispatchToProps = (dispatch) => ({
  onLogin: (params) => dispatch(LoginDetailsUpdate(params)),
});
export default connect(null, mapDispatchToProps)(Login);

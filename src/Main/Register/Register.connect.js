import { connect } from "react-redux";
import Register from "./Register";
import { registerAction } from "./Register.action";

const mapDispatchToProps = (dispatch) => ({
  onRegister: (params) => dispatch(registerAction(params)),
});

export default connect(null, mapDispatchToProps)(Register);

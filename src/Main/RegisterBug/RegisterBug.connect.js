import { connect } from "react-redux";
import RegisterBug from "./RegisterBug";
import { RegisterBugAction } from "./RegisterBug.action";

const mapDispatchToProps = (dispatch) => ({
  onRegisterBug: (params) => dispatch(RegisterBugAction(params)),
});

export default connect(null, mapDispatchToProps)(RegisterBug);

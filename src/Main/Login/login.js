import { PureComponent } from "react";
import LoginForm from "./form";
class Login extends PureComponent {  
  render(){
    const {onLogin} =this.props;
    return(
    <div>
      <p>login</p>
      <LoginForm onSubmit={onLogin} />
    </div>
    )
  }
}

export default Login;

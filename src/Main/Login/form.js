import { LOGINFORM } from "./Login.constant";
import { Field, reduxForm } from "redux-form";

function LoginForm({ handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <Field
          type="text"
          tag={Field}
          component="input"
          autoComplete="on"
          id="username"
          name="username"
        />
      </div>
      <div>
        <label>email</label>
        <Field
          type="email
          tag={Field}"
          component="input"
          autoComplete="on"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label>Password</label>
        <Field
          type="password"
          tag={Field}
          component="input"
          autoComplete="on"
          name="password"
          id="password"
        />
      </div>
      <button type={"submit"}>Login</button>
    </form>
  );
}

export default reduxForm({
  form: LOGINFORM,
})(LoginForm);

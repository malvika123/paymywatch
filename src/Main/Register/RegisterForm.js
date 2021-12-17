import { REGISTERFORM } from "./Register.constant";
import { Field, reduxForm } from "redux-form";

function RegisterForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>FirstName</label>
        <Field
          type="text"
          component="input"
          name="firstname"
          autoComplete="on"
        />
      </div>
      <div>
        <label>LastName</label>
        <Field
          type="text"
          component="input"
          name="secondname"
          autoComplete="on"
        />
      </div>
      <div>
        <label>Email</label>
        <Field type="email" component="input" name="email" autoComplete="on" />
      </div>
      <div>
        <label>username</label>
        <Field
          type="text"
          name="username"
          component="input"
          autoComplete="on"
        />
      </div>
      <div>
        <label>password</label>
        <Field
          type="password"
          component="input"
          name="password"
          autoComplete="on"
        />
      </div>
      <div>
        <label>Re-enter password</label>
        <Field
          type="password"
          component="input"
          name="password2"
          autoComplete="on"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default reduxForm({
  form: REGISTERFORM,
})(RegisterForm);

import { Field, reduxForm } from "redux-form";
import { required, RegisterBugMaxLength } from "../ValidateForm/validateForm";
import { renderField } from "./h";

const RegisterBugForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="textarea"
          tag={Field}
          component={renderField}
          autoComplete="on"
          name="registBug"
          validate={[required, RegisterBugMaxLength]}
        />
      </div>
      <button type="submit">submit bug</button>
    </form>
  );
};

export default reduxForm({
  form: "RegisterBugForm",
})(RegisterBugForm);

import RegisterBugForm from "./RegisterBug.form";

const RegisterBug = ({ onRegisterBug }) => {
  return (
    <div>
      <label className="bugHeading">Register a bug.</label>
      <p className="bugDescription">
        Your input is valuable to us. Soon we will pay you for adding value to
        this site. Thank you.{" "}
      </p>
      <RegisterBugForm onSubmit={onRegisterBug} />
    </div>
  );
};
export default RegisterBug;

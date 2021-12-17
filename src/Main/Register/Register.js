import RegisterForm from "./RegisterForm";
const Register = ({ onRegister }) => {
  return (
    <div>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};
export default Register;

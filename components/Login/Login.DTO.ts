import FieldSelectorDTO from "../core/FieldSelectorDTO";

const LoginDTO: FieldSelectorDTO[] = [
  {
    name: "email",
    title: "Email",
    type: "email",
    dbType: "string",
    required: true,
  },
  {
    name: "password",
    title: "Password",
    type: "password",
    dbType: "string",
    required: true,
  },
];

export default LoginDTO;

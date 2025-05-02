import FieldSelectorDTO from "../core/FieldSelectorDTO";

const RegisterDTO: FieldSelectorDTO[] = [
  {
    name: "separator1",
    title: "",
    containerClass: "w-full",
    type: "hstack",
    dbType: "string",
    subItems: [
      {
        name: "firstName",
        title: "First Name",
        type: "text",
        dbType: "string",
        required: true,

        containerClass: "w-1/2",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "text",
        dbType: "string",
        required: true,

        containerClass: "w-1/2",
      },
    ],
  },
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

export default RegisterDTO;

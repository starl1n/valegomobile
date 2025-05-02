import * as yup from "yup";

const yupTypeValidator = (item: any) => {
  if (item.htmlType === "selectobj" || item.htmlType === "radioobj") {
    return yup.string().label(item.title).required();
  } else if (
    item.dbType === "string" ||
    item.dbType === "varchar" ||
    item.dbType === "datetime"
  ) {
    return yup.string().label(item.title).required();
  } else if (item.dbType === "bool" || item.dbType === "bit") {
    return yup.boolean().label(item.title).required();
  } else if (
    item.dbType === "int" ||
    item.dbType === "bigint" ||
    item.dbType === "decimal" ||
    item.dbType === "money"
  ) {
    return yup.number().label(item.title).required();
  } else if (item.dbType === "date") {
    return yup.date().label(item.title).required();
  }
};

type YupSchema =
  | yup.StringSchema
  | yup.BooleanSchema
  | yup.NumberSchema
  | yup.DateSchema;

export { YupSchema };

export default yupTypeValidator;

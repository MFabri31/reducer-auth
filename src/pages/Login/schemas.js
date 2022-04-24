import * as Yup from "yup";

// formik -> state
export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = {
  username: Yup.string().required("Campo obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
};

/*
se declaran los campos y sus validaciones
*/

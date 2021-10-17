import * as Yup from "yup";

export const addDeviceValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string().required("Required"),
  features: Yup.string(),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  details: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!"),
});

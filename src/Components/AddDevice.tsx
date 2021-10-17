import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { addDeviceValidationSchema } from "./addDeviceValidationSchema";
import FormField from "./formFeild";
import FormFileField from "./formFileFeild";
import TextArea from "./textArea";
import { createDevice } from "../Services";
import Spinner from "./Spinner";

const AddDevice = () => {
  const history = useHistory();
  return (
    <div className="container add-device pt-5">
      <Formik
        initialValues={{
          name: "",
          category: "",
          image: null,
          coverImage: null,
          features: "",
          title: "",
          details: ""
        }}
        onSubmit={(values, actions) => {
          const features = values.features.split("\n").filter(item => item);
          if (!values.image) {
            actions.setFieldError("image", "Required");
          }
          if (!values.coverImage) {
            actions.setFieldError("coverImage", "Required");
          }
          if (!values.coverImage || !values.image) return;

          createDevice({ ...values, features })
            .then(() => {
              history.push("/");
            })
            .catch(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={addDeviceValidationSchema}
      >
        {props => {
          return (
            <form className="row" onSubmit={props.handleSubmit}>
              {props.isSubmitting && <Spinner />}
              <FormField
                formikProps={props}
                name={"name"}
                displayName={"Device Name:"}
              />
              <div className="col-md-6 pb-3">
                <label>
                  Category:
                  <select
                    className={`form-control ${
                      props.values.category === "" ? "opacity-7" : ""
                    }`}
                    name={"category"}
                    onChange={e =>
                      props.setFieldValue("category", e.target.value)
                    }
                    value={props.values.category}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Internet">Internet</option>
                    <option value="Others">Others</option>
                  </select>
                </label>
                {props.errors.category && props.touched.category ? (
                  <div className={"d-inline-block ps-3 error"}>
                    {props.errors.category}
                  </div>
                ) : null}
              </div>
              <FormFileField
                name={"image"}
                displayName={"Device image"}
                formikProps={props}
              />
              <FormFileField
                name={"coverImage"}
                displayName={"Cover image in details page"}
                formikProps={props}
              />
              <FormField
                formikProps={props}
                name={"title"}
                displayName={"Title in details page:"}
              />
              <TextArea
                formikProps={props}
                displayName={"Details in details page:"}
                name={"details"}
              />
              <TextArea
                formikProps={props}
                displayName={"Features in details page:"}
                name={"features"}
              />
              <div className="col-12 text-center">
                <button
                  disabled={props.isSubmitting}
                  className={`btn btn-primary ${
                    props.isSubmitting ? "opacity-7" : ""
                  }`}
                  type={"submit"}
                >
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default AddDevice;

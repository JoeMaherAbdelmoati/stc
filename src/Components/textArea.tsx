import React,{FC} from "react";
import {FormFieldProps} from "../Interfaces/formField.interface";

const TextArea:FC<FormFieldProps>=({formikProps,name,displayName})=>{
    return(<div className='col-md-6 pb-3'>
        <label>
            {displayName}
            <textarea
                className='form-control no-resize'
                rows={4}
                name={name}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values[name]}
            />
        </label>
        {formikProps.errors[name] && formikProps.touched[name] ? (
            <div className={'d-inline-block ps-3 error'}>{formikProps.errors[name]}</div>
        ) : null}
    </div>)
}
export default TextArea;
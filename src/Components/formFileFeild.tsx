import React, { FC } from "react";
import ShowFileName from "./ShowFileName";
import {FormFileFieldInterface} from "../Interfaces/formFileField.interface";

const FormFileField:FC<FormFileFieldInterface>=({displayName,formikProps,name})=>{
    return(<div className='col-md-6 pb-3'>
        <label className={'btn btn-outline-secondary'}>
            {displayName}
            <input className={'d-none'} type='file' name={name} accept={'image/*'} onChange={(e)=>{
                if(e.target.files![0])
                    {
                        formikProps.setFieldValue(name,e.target.files![0])
                    }
            }}/>
        </label>
        <ShowFileName file={formikProps.values[name]}/>
        {formikProps.errors[name] ? (
            <div className={'d-inline-block ps-3 error'}>{formikProps.errors[name]}</div>
        ) : null}
    </div>)
};
export default FormFileField;
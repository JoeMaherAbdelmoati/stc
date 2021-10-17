import React, { FC }  from "react";
import {FileProps} from "../Interfaces/file.interface";

const ShowFileName:FC<FileProps>=({file})=>{
    return <span className={'ps-3'}>{file?.name}</span>
};
export default ShowFileName;
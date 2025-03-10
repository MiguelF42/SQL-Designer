import React from "react";
import {MenuTable} from "../MenuTable";
import { useState,useEffect } from "react";
import {EllipsisHorizontalIcon} from "@heroicons/react/16/solid";

import FieldName from "../FieldName";
import FieldType from "../FieldType";
import NullableButton from "../NullableButton";
import IndexTypeButton from "../IndexTypeButton";
import AttributesButton from "../AttributesButton";


export function FieldMenu({updateColumn, column, index, deleteColumn}) {

    const [field, setField] = useState(column);

    useEffect(() => {
        updateColumn(field,index);
    },[field]);

    useEffect(() => {
        setField(column);
    },[column]);

    const deleteField = () => {
        deleteColumn(index);
    }

    return (
        <div className="flex text-white px-2 mb-3">
            <FieldName field={field} setField={setField} />
            <FieldType field={field} setField={setField} />
            <div className="flex items-center justify-between w-full ml-1">
                <NullableButton field={field} setField={setField} />
                <IndexTypeButton field={field} setField={setField} />
                <AttributesButton field={field} setField={setField} deleteField={deleteField}/>
            </div>
        </div>
    )
}

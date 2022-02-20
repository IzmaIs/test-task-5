import '../css/multiselector.css';
import React from 'react';
import Select from "react-select";

const clientGroup = [
    {value: 'VIP', label: 'VIP'},
    {value: 'Проблемные', label: 'Проблемные'},
    {value: 'ОМС', label: 'ОМС'},
    {value: 'ДМС', label: 'ДМС'}
]

export default function MultiSelector(props) {

    return (
        <>
            <span>Выберите группу клиентов:</span>
            <Select
                closeMenuOnSelect={true}
                isMulti
                options={clientGroup}
                value={props.value}
                onChange={props.onChange}
                className={`${props.error ? "input-error" : ""}`}
            />
            <span className="input-error-msg">{props.error ? "Выберите хотя бы одного клиента" : " "}</span>
        </>
    )
}
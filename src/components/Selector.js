import React from 'react';
import '../css/selector.css';
import Select from "react-select";

const doctors = [
    {value: 'Петров', label: 'Петров'},
    {value: 'Захаров', label: 'Захаров'},
    {value: 'Черниговская', label: 'Черниговская'}
]

export default function Selector(props) {

    return (
        <>
            <span>Выберите доктора:</span>
            <Select
                closeMenuOnSelect={true}
                options={doctors}
                defaultValue={props.value}
                onChange={props.onChange}
                className={`${props.error ? "input-error" : ""}`}
            />
            <span className="input-error-msg">{props.error ? "Выберите доктора" : " "}</span>
        </>
    )
}
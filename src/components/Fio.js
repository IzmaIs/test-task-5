import React from "react";
import {FioSuggestions} from "react-dadata";
import 'react-dadata/dist/react-dadata.css';

export default function Fio (props) {
    const token = "554a1ccc6c63554d7da56fe0b549733c18a46c14";

    return (
        <>
            <span id="FIO">ФИО</span>
            <FioSuggestions
                token={token}
                value={props.value}
                onChange={props.onChange}
                inputProps={{className: `react-dadata__input ${props.error ? "input-error" : ""}`}}
            />
            <span className="input-error-msg">{props.error ? "Заполните поле ФИО" : " "}</span>
        </>
    )
}
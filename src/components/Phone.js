import React from "react";
import '../css/phone.css';
import NumberFormat from 'react-number-format';

export default function Phone(props) {


    return (
        <div className="phone">
            <span>Введите номер телефона: </span>
            <NumberFormat
                className={`phone-input ${props.error ? "input-error" : ""}`}
                placeholder="Введите номер телефона"
                onValueChange={(values) => {
                    const { value } = values;
                    props.onChange(value);
                }}
                format="+7(###) ###-##-##"
            />
            <span className="input-error-msg">{props.error ? "Ошибка при заполнении поля" : " "}</span>
        </div>
    )
}
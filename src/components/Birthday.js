import '../css/birthday.css';
import NumberFormat from "react-number-format";
import React from "react";

export default function Birthday(props) {
    return (
        <>
            <div className="birthday">
                <label htmlFor="birthday">Дата рождения: </label>
            </div>
            <NumberFormat
                className={`birthday-input ${props.error ? "input-error" : ""}`}
                format="##.##.####"
                placeholder="ДД.ММ.ГГГГ"
                mask={['Д', 'Д', 'М', 'М', 'Г','Г','Г','Г']}
                onValueChange={(values) => {
                    const { formattedValue, value } = values;
                    props.onChange(formattedValue, value);
                }}
            />
            <span className="input-error-msg">{props.error ? "Ошибка при заполнении поля" : " "}</span>
        </>
    )
}
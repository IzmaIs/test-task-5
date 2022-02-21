import React from "react";


export default function Gender (props) {
    return (
        <>
            <div className="gender">
            <input type="radio"
                   name="gender"
                   value={props.value}
                   onChange={props.onChange}
                   className={`${props.error ? "input-error" : ""}`}
            />
                <label htmlFor="gender">Мужчина</label>
            <input type="radio"
                   name="gender"
                   value={props.value}
                   onChange={props.onChange}
                   className={`${props.error ? "input-error" : ""}`}
            />
                <label htmlFor="gender">Женщина</label>
            </div>
            <span className="input-error-msg">{props.error ? "Ошибка при заполнении поля" : " "}</span>
            </>
    )
}

import '../css/birthday.css';

export default function Birthday() {
    return (
        <>
            <div className="birthday">
                <label htmlFor="birthday">Дата рождения: </label>

            </div>
            <input id="birthday" type="date" min="1900-01-01" max="2022-02-18"/>
        </>
    )
}
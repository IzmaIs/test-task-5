import React, {useState} from "react";
import Birthday from "./Birthday";
import Phone from "./Phone";
import MultiSelector from "./MultiSelector";
import Selector from "./Selector";
import Fio from "./Fio";
import Gender from "./Gender";

const fields = {
    isInValidFullName: false,
    isInValidBirthDay: false,
    isInValidPhoneNumber: false,
    isInValidGender: false,
    isInValidMultiSelector: false,
    isInValidSelector: false,
}

const month = () => {
    let m = new Date().getMonth()+1;
    if (m < 10) {
        m = "0" + m;
    }
    return m;
}

export default function Form () {
    const [fullName, setFullName] = useState({});
    const [birthDay, setBirthDay] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [multiSelector, setMultiSelector] = useState();
    const [selector, setSelector] = useState();
    const [isInValid, setValid] = useState(fields);

    const y = new Date().getFullYear();
    const d = new Date().getDate();// eslint-disable-next-line
    const today = `${d}`+'.'+month()+'.'+`${y}`;
    const splitToDay = today.split(".")
    const splitBirthDay = birthDay.split(".")
    const regexp = /[0-9Г][0-9Г][0-9Г]Г/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isInValidFullName = !fullName.data || !fullName.data.name || !fullName.data.patronymic || !fullName.data.surname;
        const isInValidBirthDay = !birthDay || birthDay.match(regexp) || splitBirthDay[2] >= splitToDay[2] || splitBirthDay[2] < 1920 || splitBirthDay[1] > 12 || splitBirthDay[0] > 31;
        const isInValidPhoneNumber = `7${phoneNumber}`.length !== 11;
        const isInValidGender = !gender;
        const isInValidMultiSelector = !multiSelector || !multiSelector[0] ;
        const isInValidSelector = !selector;
        if (isInValidFullName) {//проврека имени
            setValid({...isInValid, isInValidFullName: true})
        } else if (isInValidBirthDay){//проверка др
            setValid({...isInValid, isInValidBirthDay: true})
        } else if (isInValidPhoneNumber) {//проверка телефона
            setValid({...isInValid, isInValidPhoneNumber: true})
        } else if (isInValidGender) {//проверка пола
            setValid({...isInValid, isInValidGender: true})
        } else if (isInValidMultiSelector) {//проверка пациента
            setValid({...isInValid, isInValidMultiSelector: true})
        } else if (isInValidSelector) {//проврка врача
            setValid({...isInValid, isInValidSelector: true})
        } else { //отправка
            alert("Форма отправлена успешно")
        }
    }
    const resetFieldValidation = (setState, newState, field) => {
        setValid({...isInValid, [field]: false })
        setState(newState)
    }
        return(
            <form id="formAdv">
                <Fio
                    value={fullName}
                    onChange={(e) => resetFieldValidation(setFullName, e, 'isInValidFullName')} error={isInValid.isInValidFullName}
                />
                <Birthday
                    value={birthDay}
                    onChange={(e) => resetFieldValidation(setBirthDay, e, 'isInValidBirthDay')} error={isInValid.isInValidBirthDay}
                />
                <Phone
                    value={phoneNumber}
                    onChange={(e) => resetFieldValidation(setPhoneNumber, e, 'isInValidPhoneNumber')} error={isInValid.isInValidPhoneNumber}
                />
                <Gender
                    value={gender}
                    onChange={(e) => resetFieldValidation(setGender, e, 'isInValidGender')} error={isInValid.isInValidGender}
                />
                <MultiSelector
                    value={multiSelector}
                    onChange={(e) => resetFieldValidation(setMultiSelector, e, 'isInValidMultiSelector')} error={isInValid.isInValidMultiSelector}
                />
                <Selector
                    value={selector}
                    onChange={(e) => resetFieldValidation(setSelector, e, 'isInValidSelector')} error={isInValid.isInValidSelector}
                />
                <label>
                    <input type="checkbox" value="yes"/> Не отправлять СМС.
                </label>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        )
    }
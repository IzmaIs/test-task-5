import React, {useState} from "react";
import Birthday from "./Birthday";
import Phone from "./Phone";
import MultiSelector from "./MultiSelector";
import Selector from "./Selector";
import Fio from "./Fio";

const filds = {
    isInValidFullName: false,
    isInValidPhoneNumber: false,
}


export default function Form () {
    const [fullName, setFullName] = useState({});
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isInValid, setValid] = useState(filds);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isInValidFullName = !fullName.data || !fullName.data.name || !fullName.data.patronymic || !fullName.data.surname;
        const isInValidPhoneNumber = `7${phoneNumber}`.length !== 11;
        if (isInValidFullName) {//проврека имени
            setValid({...isInValid, isInValidFullName: true})
            alert("oshibka imeni")
        } else if (isInValidPhoneNumber) {
            alert("oshibka nomer")
        } else {
            alert("otprvka ")
        }
        console.log(phoneNumber);
    }
    const resetFildValidation = (setState, newState, field) => {
        setValid({...isInValid, [field]: false })
        setState(newState)
    }
        return(
            <form id="formAdv">
                <Fio value={fullName} onChange={(e) => resetFildValidation(setFullName, e, 'isInValidFullName')} error={isInValid.isInValidFullName}/>
                <Birthday/>
                <Phone value={phoneNumber} onChange={setPhoneNumber}/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="MALE"
                           /> Мужчина
                    <input type="radio"
                           name="gender"
                           value="FEMALE"
                           /> Женщина
                </label>
                <MultiSelector/>
                <Selector/>
                <label>
                    <input type="checkbox" /> Не отправлять СМС.
                </label>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        )
    }
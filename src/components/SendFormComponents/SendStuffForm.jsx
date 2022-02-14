import React, {useState} from 'react';
import {useStep} from "react-hooks-helper";
import Checkboxes from "./StepForm/Checkboxes";
import Select from "./StepForm/Select";
import Location from "./StepForm/Location";
import Address from "./StepForm/Address";
import Review from "./StepForm/Review";
import Submit from "./StepForm/Submit";

const steps = [
    {id: 'checkboxes'},
    {id: 'select'},
    {id: 'location'},
    {id: 'address'},
    {id: 'review'},
    {id: 'submit'}
];

const SendStuffForm = () => {
    const [formData, setFormData] = useState({
        userGift: "",
        firstName: "",
        lastName: "",
        nickName: ""
    });

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setFormData, navigation };

    const renderSwitch = () => {
        switch (step.id) {
            case 'checkboxes':
                return <Checkboxes {...props} />;
            case 'select':
                return <Select />;
            case 'location':
                return <Location />;
            case 'address':
                return <Address />;
            case 'review':
                return <Review />;
            case 'submit':
                return <Submit />;
            default:
                return null;
        }
    }

    return (
        <form className="sendStuffForm">
            {renderSwitch(step.id)}
        </form>
    )



};

export default SendStuffForm;
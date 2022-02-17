import React, {useState} from 'react';
import {useStep} from "react-hooks-helper";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkboxes from "./StepForm/Checkboxes";
import Select from "./StepForm/Select";
import Location from "./StepForm/Location";
import Address from "./StepForm/Address";
import Review from "./StepForm/Review";
import Submit from "./StepForm/Submit";
import BearBg from "../../assets/Background-Form-mini.jpg";

// const steps = [
//     {id: 'checkboxes'},
//     {id: 'select'},
//     {id: 'location'},
//     {id: 'address'},
//     {id: 'review'},
//     {id: 'submit'}
// ];

const SendStuffForm = () => {
    const [showSelect, setShowSelect] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleShowSelect = (e) => {
        !showSelect ? setShowSelect(true) : setShowSelect(false);
    }

    const props = { showSelect, setShowSelect, handleShowSelect, register };

    // const schemaGiveForm = Yup
    const onSubmit = data => console.log(data);
    console.log(errors);

    // const { step, navigation } = useStep({
    //     steps,
    //     initialStep: 0,
    // });

    // const renderSwitch = () => {
    //     switch (step.id) {
    //         case 'checkboxes':
    //             return <Checkboxes {...props} />;
    //         case 'select':
    //             return <Select />;
    //         case 'location':
    //             return <Location />;
    //         case 'address':
    //             return <Address />;
    //         case 'review':
    //             return <Review />;
    //         case 'submit':
    //             return <Submit />;
    //         default:
    //             return null;
    //     }
    // }

    return (
        <form className="sendStuffForm submit" onSubmit={handleSubmit(onSubmit)}>
            {/*{renderSwitch(step.id)}*/}
            <Checkboxes {...props} />
            <Select {...props} />
            <Location {...props} />
            <Address {...props} />
            <Review {...props} />
            {/*<Submit />*/}
            <img src={BearBg} alt="bear" className="sendStuffForm__bearBg"/>
        </form>
    )



};

export default SendStuffForm;
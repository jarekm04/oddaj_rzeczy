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

const steps = [
    {id: 'checkboxes'},
    {id: 'select'},
    {id: 'location'},
    {id: 'address'},
    {id: 'review'},
    {id: 'submit'}
];

const schemaMainForm = yup.object().shape({
    stuff: yup.string().required("Zaznacz jakie rzeczy masz do oddania")
});

const SendStuffForm = () => {
    const [showSelect, setShowSelect] = useState(false);
    const [moveForward, setMoveForward] = useState(true);
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schemaMainForm)
    });

    const handleShowSelect = () => {
        !showSelect ? setShowSelect(true) : setShowSelect(false);
    }

    const handleMoveForward = (item) => {
        if (Array.isArray(item)) {
            const checkEveryItem =  item.every((el) => getValues(el));
            if (checkEveryItem) {
                navigation.next();
                setMoveForward(true);
            }
            else {
                setMoveForward(false);
            }
            console.log("Tutaj jest tablica")
        } else {
            if (!getValues(item)) {
                setMoveForward(false);
            } else {
                navigation.next();
                setMoveForward(true);
            }
        }
    }

    const handleMoveBackward = () => navigation.previous();

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const onSubmit = data => {
        console.log(data, "data");
    };
    console.log(errors);

    const props = { showSelect, setShowSelect, handleShowSelect, register, watch, getValues, navigation, moveForward, handleMoveForward, handleMoveBackward };

    const renderSwitch = () => {
        switch (step.id) {
            case 'checkboxes':
                return <Checkboxes {...props} />;
            case 'select':
                return <Select {...props} />;
            case 'location':
                return <Location {...props} />;
            case 'address':
                return <Address {...props} />;
            case 'review':
                return <Review {...props} />;
            case 'submit':
                return <Submit />;
            default:
                return null;
        }
    }

    return (
        <form className="sendStuffForm submit" onSubmit={handleSubmit(onSubmit)}>
            {renderSwitch(step.id)}
            <img src={BearBg} alt="bear" className="sendStuffForm__bearBg"/>
        </form>
    )



};

export default SendStuffForm;
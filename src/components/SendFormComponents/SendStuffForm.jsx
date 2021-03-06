import React, {useState} from 'react';
import {useStep} from "react-hooks-helper";
import {useForm} from "react-hook-form";
import {dbFireStore} from "../../firebase";
import {addDoc, collection} from "firebase/firestore"
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


const SendStuffForm = () => {
    const [showSelect, setShowSelect] = useState(false);
    const [moveForward, setMoveForward] = useState(true);
    const {register, handleSubmit, watch, getValues, formState: {errors}} = useForm();

    const handleShowSelect = () => {
        !showSelect ? setShowSelect(true) : setShowSelect(false);
    }

    const handleMoveForward = (item) => {
        if (Array.isArray(item)) {
            const checkEveryItem = item.every((el) => getValues(el));
            if (checkEveryItem) {
                if (getValues("phone").length === 9 && getValues("postCode").includes('-') && getValues("postCode").length === 6) {
                    navigation.next();
                    setMoveForward(true);
                } else {
                    setMoveForward(false);
                }
            } else {
                setMoveForward(false);
            }
        } else {
            if (!getValues(item)) {
                setMoveForward(false);
            } else if (getValues("helpgroups") && getValues("helpgroups").length === 0) {
                setMoveForward(false);
            } else {
                navigation.next();
                setMoveForward(true);
            }
        }
    }

    const handleMoveBackward = () => navigation.previous();

    const {step, navigation} = useStep({
        steps,
        initialStep: 0,
    });

    const onSubmit = data => {
        console.log(data);
        addDoc(collection(dbFireStore, "SendStuffForm"), data);
        navigation.next();
    };

    const props = {
        showSelect,
        setShowSelect,
        handleShowSelect,
        register,
        watch,
        getValues,
        navigation,
        moveForward,
        errors,
        handleMoveForward,
        handleMoveBackward
    };

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
                return <Submit/>;
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
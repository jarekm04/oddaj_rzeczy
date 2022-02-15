import React, {useState} from 'react';
import {useStep} from "react-hooks-helper";
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

    const handleShowSelect = () => {
        !showSelect ? setShowSelect(true) : setShowSelect(false);
    }

    // const { step, navigation } = useStep({
    //     steps,
    //     initialStep: 0,
    // });

    const props = { showSelect, setShowSelect, handleShowSelect };

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
        <form className="sendStuffForm">
            {/*{renderSwitch(step.id)}*/}
            {/*<Checkboxes />*/}
            {/*<Select />*/}
            {/*<Location {...props} />*/}
            {/*<Address />*/}
            <Review />
            {/*<Submit />*/}
            <img src={BearBg} alt="bear" className="sendStuffForm__bearBg"/>
        </form>
    )



};

export default SendStuffForm;
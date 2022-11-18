import { SpinnerModel } from "./app";
import React from 'react';

const defaultSpinnerProps = {
    message: "Loading",
};
type Propss = SpinnerModel & typeof defaultSpinnerProps;
const Spinner=({message}:Propss)=>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{message}</div>
        </div>
    );
}
Spinner.defaultProps = defaultSpinnerProps;

export default Spinner;
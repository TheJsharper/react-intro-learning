import { SpinnerModel } from "./app";
import React from 'react';

const defaultSpinnerProps = {
    message: "Loading",
};
type SpinnerPropsWithDefaultValue = SpinnerModel & typeof defaultSpinnerProps;
const Spinner=({message}:SpinnerPropsWithDefaultValue)=>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{message}</div>
        </div>
    );
}
Spinner.defaultProps = defaultSpinnerProps;

export default Spinner;
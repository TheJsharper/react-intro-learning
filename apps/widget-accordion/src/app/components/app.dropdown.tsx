import { useState } from "react";
import { Options } from "../app";

export interface DropdownProps {
    options: Array<Options>;
    selected: Options;
    setSelected: (option: Options) => void;
}



const Dropdown = (props: DropdownProps) => {

    const { options, selected, setSelected } = props;

    const [open, setOpen] = useState<boolean>(false);



    const renderedOptions: Array<JSX.Element | null> = options.map((option: Options, index: number) => {

        if (option.value === selected.value) return null;
        else
            return (
                <div
                    key={`${option.value}-${index}`}
                    className="item"
                    onClick={() => setSelected(option)}
                >
                    {option.label}
                </div>
            );
    });



    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="" className="label">Select a Color</label>
                <div  onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ui ${open?'visible transition' :''}`}>
                        {renderedOptions}
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Dropdown;
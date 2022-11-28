import { useState } from "react";
import Dropdown from "./app.dropdown";

const options: Array<Options> = [

    {
        label: 'Afrikanns',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]

export interface Options {
    label: string; value: string;

}





const Translate = () => {
    const [selected, setSelected] = useState<Options>(options[0]);
    const [text, setText] = useState<string>('');
    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label htmlFor="translateText">Enter text</label>
                    <input name="translateText" type="text" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown {...{ options, selected, setSelected, label: 'Select a language' }} />
        </div>
    );
}


export default Translate;
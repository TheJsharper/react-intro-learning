import { useEffect, useState } from "react";
import { Translation } from "../models/app.google-translate";
import googleTranslateApiPost from "../services/app.google-translate.service";

export interface ConvertProps {
    language: string;
    text: string;
}


const Convert = (props: ConvertProps) => {
    const { language, text } = props;

    const [translated, setTranslated] = useState<Translation[]>([]);

    const [debouncedText, setDebouncedText] = useState<string>(text);

    useEffect(()=>{
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return ()=> clearTimeout(timerId);
    }, [text]);


    useEffect(() => {

        (async () => {
            const {data} = await googleTranslateApiPost({ language, text:debouncedText });
            console.log("DATA ", data.data.translations);
            setTranslated(data.data.translations);
        })();


    }, [language, debouncedText]);

        const renderedTranslations = translated.map((value:Translation, index:number)=> (
            <div key={index} >
                    <h2> Language Origin:{value.detectedSourceLanguage} </h2>
                    <h1> Translated: {value.translatedText} </h1>
            </div>
        ))


    return (<div>
        {renderedTranslations}

    </div>);
}

export default Convert;
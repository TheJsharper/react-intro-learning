import React, { useState } from "react";

export interface AccordionProps {
    title: string, content: string;
}

const Accordion = (props: { items: AccordionProps[] }) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const onTitleClick = (index:number)=>{
        console.log('title clicked ', index);
        setActiveIndex(index);
    }
    const rendererItems: Array<JSX.Element> = props.items.map((item, index:number) => {
        const active = activeIndex === index ? 'active': '';
        return (
            <React.Fragment key={item.title}>
                <div  onClick={ ()=> onTitleClick(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div className={`content  ${active}`}>
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className=" ui styled accordion">
            {rendererItems}
        </div>)
}
export default Accordion;
export interface AccordionProps{
    title:string, content:string;
}

const Accordion = (props:{items:AccordionProps[]})=>{
    return(<h1>{props.items.length}</h1>)
}
export default Accordion;
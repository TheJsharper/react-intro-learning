interface LinklProps{
    href:string;
    children:string
    className:string;    

}

const Link = (props:LinklProps)=>{

    const onClick = (e:React.BaseSyntheticEvent<Event>)=>{

 
        e.preventDefault();

        window.history.pushState({},'', href);

        const navEvent:PopStateEvent = new PopStateEvent('popstate');

        window.dispatchEvent(navEvent);

    }
    const {href, children, className} = props;
    return (
       <a onClick={onClick} href={href} className={className} > {children}</a>
    );
}

export default Link;
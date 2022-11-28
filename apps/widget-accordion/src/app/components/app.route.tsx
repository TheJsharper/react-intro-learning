import { useEffect, useState } from "react";

interface RouteProps {
    path: string;
    children: JSX.Element;
}

const Route = (props: RouteProps) => {


   const [currentPath, setCurrentPath]  =useState(window.location.pathname)

    useEffect(()=>{

        const onLocationChange = ()=>   setCurrentPath(window.location.pathname);
        
        window.addEventListener('popstate',onLocationChange );
        
        return ()=> window.removeEventListener("popstate", onLocationChange);
    },[]) ;

    const { path, children } = props;


    return currentPath === path ? children : null;

}

export default Route;
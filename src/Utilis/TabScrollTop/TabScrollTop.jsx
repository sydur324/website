import { useEffect } from "react";
import { useLocation } from 'react-router-dom';


const TabScrollTop = ({children}) => {
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0,0)
    },[pathname])

    return children
};
export default TabScrollTop;
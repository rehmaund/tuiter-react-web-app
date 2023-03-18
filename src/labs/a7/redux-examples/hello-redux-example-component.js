import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return(
        <h1 className="wd-color-black">{message}</h1>
    );
};


export default HelloReduxExampleComponent;
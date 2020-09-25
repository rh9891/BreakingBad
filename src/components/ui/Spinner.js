import React from "react";
import spinner from "../../assets/images/spinner,js";

const Spinner = () => {
    return (
        <img src={spinner} style={{ width: "200px", margin: "auto", display: "block"}} alt="Loading" />
    )
}

export default Spinner;

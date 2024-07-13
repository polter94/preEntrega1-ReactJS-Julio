import React from "react";
import { IoCartOutline } from "react-icons/io5";

const cartWidget = () => {
    return (

        <div className="carrito">
            <IoCartOutline size="35px" color="#ff7d01" />
            <span className="badge">2</span>
        </div>

    );
};

export default cartWidget;
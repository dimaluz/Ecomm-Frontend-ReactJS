import React, { useState } from "react";
import './Menu.css';
import { MenuComponents } from "./MenuComponents";

const Menu = () => {

    const [selected, setSelected] = useState(0);

    return(
        <div className="outer-menu-tab">
            <div className="inner-menu-tab">
                {
                    MenuComponents.map((item, index) => {
                        return (
                            <div className={selected === index? "menu-item active": "menu-item"} key={index} onClick={()=>setSelected(index)}>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu;
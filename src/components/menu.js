import React from 'react';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu(props){
    return(
        <ul className="ssb-menu">
            {
                props.buttons.map((current) => {
                    return (
                        <li className="menu-element">
                            <button onClick={() => {alert("Not working yet! :P")}}>
                                <FontAwesomeIcon icon={current.icon}/>
                                <span>
                                    {current.text}
                                </span>
                            </button>                            
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Menu;
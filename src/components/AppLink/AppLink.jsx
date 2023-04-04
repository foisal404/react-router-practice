import React from 'react';
import { NavLink } from 'react-router-dom';
import "./AppLink.css"

const AppLink = ({to,children}) => {
    return (
        <div>
            <NavLink
                    to={to} className={({ isActive}) =>isActive? "bg-slate-200 rounded-md": ""}>
                    {children}
                  </NavLink>
        </div>
    );
};

export default AppLink;
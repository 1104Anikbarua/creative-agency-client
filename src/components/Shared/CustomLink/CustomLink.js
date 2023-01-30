import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ fontSize: "16px", color: match ? "#009444" : "none" }}
                to={to}
                {...props}>

                {children}
            </Link>
        </div >
    );
};

export default CustomLink;
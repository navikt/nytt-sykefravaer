import './Lenkeelement.less';

import React from 'react';

interface LenkesamlingProps {
    children: JSX.Element | JSX.Element[];
}

const Lenkesamling = ({ children }: LenkesamlingProps) => {
    return <nav className="lenkesamling">{children}</nav>;
};

export default Lenkesamling;
